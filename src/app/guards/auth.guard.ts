import {
  Injectable,
} from '@angular/core';

import {
  CanActivate,
  CanActivateChild,
  Router,
} from '@angular/router';
import { AuthenticationService } from '@app/services/authentication.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    private router: Router,
    private $auth: AuthenticationService,
  ) { }

  private async checkAuth(): Promise<boolean> {
    const isSignedIn = await this.$auth.isSignedIn();
    if (!isSignedIn) {
      await this.$auth.logout();
      this.router.navigate(['/', 'login']);
    }

    return isSignedIn;
  }

  canActivate(): Promise<boolean> {
    return this.checkAuth();
  }

  canActivateChild(): Promise<boolean> {
    return this.checkAuth();
  }

}
