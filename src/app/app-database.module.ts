import {
  NgModule,
} from '@angular/core';

import { DatabaseModule, IRootConfig } from '@paella-front/ngx-database';


const config: IRootConfig = {
  databases: {
    app: {
      config: { name: 'paellasoft', storeName: '_paellasoft' },
      isDefault: true,
    }
  }
};

@NgModule({
  exports: [DatabaseModule],
  imports: [DatabaseModule.forRoot(config)],
})
class AppDatabaseModule { }


export {
  AppDatabaseModule,
};
