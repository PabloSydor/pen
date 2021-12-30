import {
  Routes,
} from '@angular/router';
import { LoginComponent } from './login/login.component';

const publicRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'login/:token', component: LoginComponent },
];

export {
  publicRoutes
};
