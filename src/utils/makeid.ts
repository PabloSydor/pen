export function makeid(): string {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let key = '';

  for (let i = 0; i < 5; i++) {
    key += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return key;
}
