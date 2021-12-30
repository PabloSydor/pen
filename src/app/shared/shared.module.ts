import {
  CommonModule,
} from '@angular/common';
import {
  NgModule,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';

import { ModalServerErrorComponent } from './components/modals/server-error/server-error.component';
import { AppPasswordDirective } from './directives/password.directive';




@NgModule({
  declarations: [
    AppPasswordDirective,
    ModalServerErrorComponent
  ],
  exports: [
    CommonModule,
    NgbModule,
    AppPasswordDirective,
    FormsModule,
    ReactiveFormsModule,
    ModalServerErrorComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
  ],
  entryComponents: [
    ModalServerErrorComponent,
  ],
})
class SharedModule { }


export {
  SharedModule,
};
