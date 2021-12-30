import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, first, tap } from 'rxjs/operators';

import { ServerErrorService } from '@app/core/server-error.service';
import { AuthenticationService } from '@app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loading = false;
  public loginForm: FormGroup;
  public loginSubmitted = false;
  public returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private serverError: ServerErrorService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.route.params.pipe(
      tap(({ token }: { token: string }) => {
        if (token) {
          this.onSubmit(token);
        }
      }),
    ).subscribe();

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  private onSubmit(token: string) {
    const data = {
      hash: token
    };

    this.loading = true;
    this.authenticationService.inviteLogin(data)
      .pipe(
        first(),
        tap(() => {
          this.loading = false;
          this.router.navigate([this.returnUrl]);
        }),
        this.serverError.catchErrorAndOpenModal(),
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe();
  }

  public tryLogin() {

    this.loginSubmitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.fLogin.email.value, this.fLogin.password.value)
      .pipe(
        first(),
        tap(() => {
          this.loading = false;
          this.router.navigate([this.returnUrl]);
        }),
        this.serverError.catchErrorAndOpenModal(),
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe();
  }

  // convenience getter for easy access to form fields
  get fLogin(): any { return this.loginForm.controls; }
}
