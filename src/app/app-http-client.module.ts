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
    },
    oauth: {
      url: environment.server.oauth,
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
