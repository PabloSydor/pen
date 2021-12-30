import {
  NgModule,
} from '@angular/core';

import {
  ExtraOptions,
  RouterModule,
  Routes,
} from '@angular/router';
import { publicRoutes } from './views/public/public.routing';


const routes: Routes = [
  ...publicRoutes,
  /// Otherwise routes
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

const config: ExtraOptions = {};

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, config)],
})
class AppRoutingModule { }


export {
  AppRoutingModule,
};
