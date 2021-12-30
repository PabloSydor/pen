#!/usr/bin/env node

const execSync = require('child_process').execSync;
const args = process.argv.splice(2);

let ksAlias = args.shift();
if(!ksAlias || ksAlias.trim() === '') {
  throw new SyntaxError(`Invalid parameters found! Alias: ${ksAlias}`);
}

const command = `keytool -genkey -v -keystore ./keystore-release.jks -keyalg RSA -keysize 2048 -validity 10000 -alias ${ksAlias}`;
console.log(`> ${command}`);
execSync(command, { stdio: 'inherit' });
