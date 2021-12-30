import {
  HttpErrorResponse,
} from '@angular/common/http';

import {
  Injectable,
} from '@angular/core';

import {
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';

import {
  of,
  OperatorFunction,
  throwError,
} from 'rxjs';

import {
  catchError,
} from 'rxjs/operators';

import { ModalServerErrorComponent } from '@app/shared/components/modals/server-error/server-error.component';


@Injectable({
  providedIn: 'root'
})
export class ServerErrorService {

  constructor(
    private ngbModal: NgbModal,
  ) { }

  public catchErrorAndOpenModal<T>(throwAgain: boolean = false, returnValue: T = null): OperatorFunction<T, T | never> {
    return catchError((response: HttpErrorResponse) => {
      const modal = this.ngbModal.open(ModalServerErrorComponent, { backdrop: 'static', centered: true });
      modal.componentInstance.response = response;

      return throwAgain ? throwError(response) : of(returnValue);
    });
  }

}
