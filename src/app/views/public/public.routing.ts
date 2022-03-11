import {
  Routes,
} from '@angular/router';
import { MonitorComponent } from './monitor/monitor.component';

const publicRoutes: Routes = [
  { path: 'monitor',  component: MonitorComponent},
  { path: '', redirectTo: '/monitor', pathMatch: 'full' },
  { path: 'monitor/:id', component: MonitorComponent },
];

export {
  publicRoutes
};
