import {
  NgModule,
} from '@angular/core';

import { IRootConfig, SuperHttpClientModule } from '@paella-front/ngx-super-http-client';
import { environment } from 'src/environments';



const config: IRootConfig = {
  domains: {
    app: {
      url: environment.server.app,
      isDefault: true,
      headers: { Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTU5NjExZDFjOWY0YzExYmVkZjhiN2YyMTI1NTY4MSIsImlzcyI6Imh0dHBzOi8vaGlwZXJtZXJjb2RlLmNvbSIsInN1YiI6ImxvY0BnbWFpbC5jb20iLCJleHAiOjIwODE3MDMwMzAsInNjb3BlIjpbImJhc2ljIiwibG9jYWwiXX0.7Cx6TPjSMUP3dIR-DiAttD_nXxHHBcVanh5z5z57Lis' }
    },
    oauth: {
      url: environment.server.oauth,
      headers: { Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTU5NjExZDFjOWY0YzExYmVkZjhiN2YyMTI1NTY4MSIsImlzcyI6Imh0dHBzOi8vaGlwZXJtZXJjb2RlLmNvbSIsInN1YiI6ImxvY0BnbWFpbC5jb20iLCJleHAiOjIwODE3MDMwMzAsInNjb3BlIjpbImxvYyJdfQ.qGfuUbosa-WgZBrSvwrzxDzpLGLeVaHNlhiLM6kG34s' }
    },
    codigo: {
      url: environment.codigo,
      headers: { Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTU5NjExZDFjOWY0YzExYmVkZjhiN2YyMTI1NTY4MSIsImlzcyI6Imh0dHBzOi8vaGlwZXJtZXJjb2RlLmNvbSIsInN1YiI6ImxvY0BnbWFpbC5jb20iLCJleHAiOjIwODE3MDMwMzAsInNjb3BlIjpbImJhc2ljIiwibG9jYWwiXX0.7Cx6TPjSMUP3dIR-DiAttD_nXxHHBcVanh5z5z57Lis' }
    }
  }
};

@NgModule({
  exports: [SuperHttpClientModule],
  imports: [SuperHttpClientModule.forRoot(config)],
})
class AppHttpClientModule { }


export {
  AppHttpClientModule,
};
