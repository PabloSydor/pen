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
  LOCAL_JWT: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTU5NjExZDFjOWY0YzExYmVkZjhiN2YyMTI1NTY4MSIsImlzcyI6Imh0dHBzOi8vaGlwZXJtZXJjb2RlLmNvbSIsInN1YiI6ImxvY0BnbWFpbC5jb20iLCJleHAiOjIwODE3MDMwMzAsInNjb3BlIjpbImxvYyJdfQ.qGfuUbosa-WgZBrSvwrzxDzpLGLeVaHNlhiLM6kG34s'
};
