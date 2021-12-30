#!/usr/bin/env node

const execSync = require('child_process').execSync;
const args = process.argv.splice(2);

const ngSchematic = args.shift();

let ngFolder = '';
const _folder = args.shift();
if(!!_folder) {
  ngFolder = _folder.slice(_folder.indexOf('=') + 1, _folder.length) + '/';
}

let ngName = '';
const _name = args.filter((v) => !v.includes('--'));
if(!!_name && _name.length > 0) {
  ngName = _name.join(' ');
}

let ngOptions = '';
const _options = args.filter((v) => v.includes('--'));
if(!!_options && _options.length > 0) {
  ngOptions = _options.join(' ');
}

const command = `ng generate ${ngSchematic} ${ngFolder}${ngName} ${ngOptions}`;
console.log(`> ${command}`);
execSync(command, { stdio: 'inherit' });
