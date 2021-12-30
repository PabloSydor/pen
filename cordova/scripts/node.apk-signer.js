#!/usr/bin/env node

const execSync = require('child_process').execSync;
const args = process.argv.splice(2);

let ksAlias = '';
const _alias = args.find((v) => v.includes('--alias'));
if(!!_alias && _alias.length > 0) {
  ksAlias = _alias.slice(_alias.indexOf('=') + 1, _alias.length);
}

let appName = '';
const _name = args.find((v) => v.includes('--name'));
if(!!_name && _name.length > 0) {
  appName = _name.slice(_name.indexOf('=') + 1, _name.length);
}

let appVersion = '';
const _version = args.find((v) => v.includes('--version'));
if(!!_version && _version.length > 0) {
  appVersion = _version.slice(_version.indexOf('=') + 1, _version.length);
}

if(
  ksAlias.trim() === '' || appName.trim() === '' || appVersion.trim() === '' ||
  ksAlias.includes('--') || appName.includes('--') || appVersion.includes('--')
) {
  throw new SyntaxError(`Invalid parameters found! Alias: ${ksAlias} | Name: ${appName} | Version: ${appVersion}`);
}

const command1 = `jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ./keystore-release.jks ./platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk ${ksAlias}`;
console.log('\n', `> ${command1}`);
execSync(command1, { stdio: 'inherit' });

const command2 = `zipalign -v 4 ./platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk ./dist/${appName}-v${appVersion}r.apk`;
console.log('\n', `> ${command2}`);
execSync(command2, { stdio: 'inherit' });

const command3 = `apksigner.bat verify ./dist/${appName}-v${appVersion}r.apk`;
console.log('\n', `> ${command3}`);
execSync(command3, { stdio: 'inherit' });
