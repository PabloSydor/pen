import {
  NgModule,
} from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';
import { LoginComponent } from './public/login/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule,
  ],
})
class ViewsModule { }


export {
  ViewsModule,
};
