import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IInvite } from '@models/IInvite';
import { IToken } from '@models/IToken';
import { DatabaseProvider } from '@paella-front/ngx-database';
import { SuperHttpClientProvider } from '@paella-front/ngx-super-http-client';
import { environment } from 'src/environments';

const STORAGE_TOKEN = 'token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _token$: BehaviorSubject<IToken> = new BehaviorSubject(null);

  constructor(
    private $db: DatabaseProvider,
    private $$shttp: SuperHttpClientProvider,
  ) { }

  ///////////////////////
  // Private Functions //
  ///////////////////////

  private async setToken(value: IToken): Promise<void> {
    await this.$db.default.set(STORAGE_TOKEN, value);
    if (!!value) {
      this.$$shttp.use('app').headers.set('Authorization', `${value.type} ${value.jwt}`);
      this.$$shttp.use('oauth').headers.set('Authorization', `${value.type} ${value.jwt}`);
    } else {
      this.$$shttp.use('app').headers.reset();
      this.$$shttp.use('oauth').headers.reset();
    }

    this._token$.next(value);
  }

  ///////////////////////
  // Private Accessors //
  ///////////////////////

  private get $shttp() {
    return this.$$shttp.use('oauth');
  }

  //////////////////////
  // Public Accessors //
  //////////////////////

  public get token$(): Observable<IToken> {
    return this._token$.asObservable();
  }

  //////////////////////
  // Public Functions //
  //////////////////////

  public getErrorResponse(errorResponse: HttpErrorResponse): any {
    if (errorResponse.error && errorResponse.error.length > 0 && errorResponse.error[0].message) {
      return errorResponse.error[0].message;
    } else {
      return 'Ocurrió un error inesperado';
    }
  }

  public async getToken(): Promise<IToken> {
    return await this.$db.default.get(STORAGE_TOKEN);
  }

  public isOauthUrl(url: string): boolean {
    return url.includes(environment.server.oauth);
  }

  public async isSignedIn(): Promise<boolean> {
    const token = await this.getToken();

    if (!!token) {
      if (!this.$$shttp.use('app').headers.get('Authorization')) {
        await this.setToken(token);
      }

      return true;
    } else { return false; }
  }

  /**
   * data = { username: email/username; }
   */
  public async recovery(data: any): Promise<void> {
    try {
      await this.$shttp.post<unknown>('/recovery', data).toPromise();
    } catch (e) {
      await this.logout();
      throw e;
    }
  }

  public async refreshToken(): Promise<IToken> {
    const oldToken = await this.getToken();
    if (!oldToken) {
      throw new Error('AuthService.refreshToken(): No token found!');
    }

    const data = { refresh: oldToken.refresh };
    const newToken = await this.$shttp.post<IToken>('/refresh', data).toPromise();
    await this.setToken(newToken);

    return newToken;
  }

  public login(username: string, password: string): Observable<unknown> {
    return this.$shttp.post<any>(`/open/login`, { username, password })
      .pipe(map((response: IToken) => {
        this.setToken(response);
        return response;
      }));
  }

  public inviteLogin(data: any): Observable<unknown> {
    const _data = { isAcceptedTerms: true, deviceId: data.deviceId || '' };
    return this.$shttp.post<any>(`/open/login/anonymous/${data.hash}`, _data)
      .pipe(map((response: IToken) => {
        this.setToken(response);
        return response;
      }));
  }

  public register(isAcceptedTerms = true, username: string, password: string, token: string): Observable<unknown> {
    return this.$shttp.put<any>(`/open/invite/${token}`, { isAcceptedTerms, username, password });
  }

  public async logout(): Promise<void> {
    await this.setToken(null);
  }

  public getMe(): Observable<unknown> {
    return this.$shttp.get(`/user/me`);
  }

  public getInvitaciones(page: any, perPage: any): Observable<IInvite[]> {
    return this.$shttp.get(`/admin/invite?page=${page}&perPage=${perPage}`, { observe: 'response' });
  }

  public enviarInvitacion(data: { email: string, dataJSON: {} }): Observable<unknown> {
    return this.$shttp.post(`/admin/invite/send`, data);
  }

  public reenviarInvitacion(data: { id: number }): Observable<unknown> {
    return this.$shttp.post(`/admin/invite/forward`, data);
  }
}
