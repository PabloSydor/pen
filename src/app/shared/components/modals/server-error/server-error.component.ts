import {
  HttpErrorResponse,
} from '@angular/common/http';

import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';

import {
  NgbActiveModal,
} from '@ng-bootstrap/ng-bootstrap';


// tslint:disable-next-line: interface-over-type-literal
type ServerError = { code: string; message: string; };

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-modal-server-error',
  templateUrl: './server-error.component.html',
})
export class ModalServerErrorComponent implements OnDestroy, OnInit {

  @Input('response')
  public response: HttpErrorResponse;

  constructor(
    public aModal: NgbActiveModal,
  ) { }

  public get error(): ServerError[] {
    return this.response.error instanceof Array ? this.response.error : [];
  }

  public get status(): number {
    return this.response.status;
  }

  ngOnDestroy() { }

  ngOnInit() { }

}
