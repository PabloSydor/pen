import { description, version } from '../../package.json';


/**
 * **Do not import this directly!** This file may replace `index.ts` during build.
 *
 * @override index.ts
 */
export const environment = {
  description,
  version,
  production: true,
  domain: 'https://test.org/',
  server: {
    app: 'https://test.org/api',
    oauth: 'https://oauth.hipermercode.com/api'
  },
  PUBLIC_JWT: 'test'
};
