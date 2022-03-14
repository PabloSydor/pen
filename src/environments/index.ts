// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `index.ts` with `production.ts`.
// The list of file replacements can be found in `angular.json`.

import { description, version } from '../../package.json';


export const environment = {
  description,
  version,
  production: false,
  domain: 'https://tuturno.hipermercode.eu/',
  server: {
    app: 'https://tuturno.hipermercode.eu/api',
    oauth: 'https://oauthv2.hipermercode.eu/api'
  },
  codigo: 'https://qr.hipermercode.eu/api/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
