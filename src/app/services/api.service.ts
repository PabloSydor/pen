import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuario } from '@models/IUsuario';
import { SuperHttpClientProvider } from '@paella-front/ngx-super-http-client';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _user$: BehaviorSubject<IUsuario> = new BehaviorSubject(null);

  /////////////////
  // Constructor //
  /////////////////

  constructor(
    private $shttp: SuperHttpClientProvider
  ) {}

  ///////////////////////
  // Private Accessors //
  ///////////////////////

  ///////////////////////
  // Public Accessors //
  ///////////////////////

  public getErrorResponse(errorResponse: HttpErrorResponse): any {
    if (errorResponse.error && errorResponse.error.length > 0 && errorResponse.error[0].message) {
      return errorResponse.error[0].message;
    } else {
      return 'Ocurrió un error inesperado';
    }
  }

  public get user$(): Observable<IUsuario> {
    return this._user$.asObservable();
  }

  public setUser$(_user): any {
    this._user$.next(_user);
  }

  public getMe(): Observable<IUsuario> {
    return this.$shttp.use('app').get(`/user/me`);
  }

  public getMonitor(qr: any) {
    // return this.$shttp.use('app').get(`/lfriend/search?qr=${qr}`);
    return this.$shttp.use('app').get(`/open/local/getbyqr?qrs=${qr}`);
  }

  public getRelacionados(qr: any) {
    return this.$shttp.use('app').get(`/lfriend/search?qr=${qr}`);
  }
}