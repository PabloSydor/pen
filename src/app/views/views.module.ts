import {
  NgModule,
} from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';
import { MonitorComponent } from './public/monitor/monitor.component';


@NgModule({
  declarations: [
    MonitorComponent
  ],
  imports: [
    SharedModule,
  ],
})
class ViewsModule { }


export {
  ViewsModule,
};
