#!/usr/bin/env node

const execSync = require('child_process').execSync;
const fs = require('fs-extra');
const args = process.argv.splice(2);

const cdvPlatform = args.shift();
if(!cdvPlatform || (cdvPlatform !== 'android' && cdvPlatform !== 'ios')) {
  throw new Error(`${cdvPlatform} is not a valid platform!`);
}

const cdvIconSource = `--icon-source ./resources/${cdvPlatform}/icon.png`;
const cdvSplashSource = `--splash-source ./resources/${cdvPlatform}/splash.png`;

const commandAssets = `cp ./resources/${cdvPlatform}/icon.png ../src/assets/images/icon.${cdvPlatform}.png`;
console.log(`> ${commandAssets}`);
fs.copyFileSync(`./resources/${cdvPlatform}/icon.png`, `../src/assets/images/icon.${cdvPlatform}.png`);

const commandResources = `npx cordova-res ${cdvPlatform} ${cdvIconSource} ${cdvSplashSource}`;
console.log(`> ${commandResources}`);
execSync(commandResources, { stdio: 'inherit' });
