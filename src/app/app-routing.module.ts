import {
  NgModule,
} from '@angular/core';

import {
  ExtraOptions,
  RouterModule,
  Routes,
} from '@angular/router';
import { MonitorComponent } from './views/public/monitor/monitor.component';
import { publicRoutes } from './views/public/public.routing';


const routes: Routes = [
  ...publicRoutes,
  /// Otherwise routes
  { path: '', component: MonitorComponent },
  { path: '**', redirectTo: '/monitor', pathMatch: 'full' },
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
