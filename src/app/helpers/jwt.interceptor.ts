import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';

import {
  Injectable,
} from '@angular/core';

import {
  Router,
} from '@angular/router';
import { SuperHttpClientProvider } from '@paella-front/ngx-super-http-client';

import { AuthenticationService } from '@app/services/authentication.service';

import {
  BehaviorSubject,
  from,
  iif,
  Observable,
  of,
  throwError,
} from 'rxjs';

import {
  catchError,
  filter,
  flatMap,
  switchMap,
  take,
  tap,
} from 'rxjs/operators';


const noop = new Observable<void>((observer) => {
  observer.next();
  observer.complete();
});

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  private inProgress$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private router: Router,
    private $auth: AuthenticationService,
    private $shttp: SuperHttpClientProvider,
  ) { }

  private refreshToken<T>(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): (source: Observable<T>) => Observable<HttpEvent<T>> {
    return (source: Observable<T>) => source.pipe(
      flatMap(() => from(this.$auth.getToken()).pipe(
        // If token is null this means that user is not logged in and we return the original request
        flatMap((token) => iif(() => !!token, noop, of(request))),
      )),
      tap(() => this.inProgress$.next(false)),
      switchMap(() => next.handle(request.clone({ setHeaders: this.$shttp.use('app').headers.getAll() }))),
    );
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((reason) => {
        if (reason instanceof HttpErrorResponse) {
          /// We don't want to refresh token for some requests (signin, signup, ...)
          if (!this.$auth.isOauthUrl(request.url)) {
            if (reason.status === 401) {
              if (this.inProgress$.getValue() === true) {
                /// If inProgress$ is true we will wait until is false
                return this.inProgress$.pipe(
                  filter((_) => _ === false),
                  take(1),
                  this.refreshToken(request, next),
                );
              } else {
                /// Set the inProgress$ to true so subsequent API calls will wait
                this.inProgress$.next(true);

                /// Call $auth.refreshToken()
                return from(this.$auth.refreshToken()).pipe(
                  this.refreshToken(request, next),
                  catchError((_error) => from(this.$auth.logout()).pipe(
                    tap(() => {
                      this.inProgress$.next(false);
                      this.router.navigate(['/', 'login']);
                    }),
                    flatMap(() => throwError(_error)),
                  )),
                );
              }
            }
          } else if (request.url.includes('/refresh')) { this.$auth.logout(); }
        }

        const error = this.$auth.getErrorResponse(reason);

        return throwError(error);
      }),
    );
  }

}
