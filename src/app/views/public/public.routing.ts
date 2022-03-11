import {
  Routes,
} from '@angular/router';
import { MonitorComponent } from './monitor/monitor.component';

const publicRoutes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: ':id', component: MonitorComponent },
];

export {
  publicRoutes
};
