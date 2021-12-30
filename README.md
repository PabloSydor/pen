# NgxCordovaAppBase

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.3 (and **updated to Angular CLI 8.3.8**), using Angular version 8.2.9.

Make sure that you have *Node* (version 10). Also the packages *@angular/cli@^8.3.8* and *cordova@^9.0.0* installed globally.


### Init project

1. Edit the files `package.json`, `cordova/package.json` and `cordova/config.xml` with your project-specific data (git, project name, cordova package, etc).
2. Run `npm run git:reset-repo` . **Caution!** This will remove your *.git* folder and re-create it with an initial commit.
3. Run `npm run init` . You can run separetly one or both commands that are executed internally:
    1. `npm run ng:init` .
    2. `npm run cordova:init` .


## Node short-commands available

Run `npm run <command> -- <options>` to use a pre-configured command.

- **build** . Builds **without** *AoT* & *Production Mode*.
- **build:prod** . Builds with *AoT* & *Production Mode*.
- **serve** . Starts a server in `localhost:4200` private (this machine).
- **serve:private** . *(alias of **serve**)*
- **serve:public** . Starts a server in `localhost:4200` public (same LAN).
- **start** . *(alias of **serve**)*

### Stats

First run `npm run stats` to build with *AoT* & *Production Mode*, with *Output Hashing* as `none` and to create a *stats* file. This build is meant to be analyzed or explored.

After that, you can run `npm run <command>` with one of the following commands:

- **stats:analyzer** . *(alias of **stats:analyzer:es2015**)*
- **stats:analyzer:es2015** . Starts a server in `localhost:4288` and opens your default browser to analyze the production build.
- **stats:analyzer:es5** . Starts a server in `localhost:4289` and opens your default browser to analyze the production build.
- **stats:explorer** . *(alias of **stats:explorer:es2015**)*
- **stats:explorer:es2015** . Opens your default browser to explore the production build (only `main-es2015.js` file).
- **stats:explorer:es5** . Opens your default browser to explore the production build (only `main-es5.js` file).


## Angular short-commands available

Run `npm run ng:<command> -- <options>` to use a pre-configured Angular command. Look at the documentation for ([Angular CLI](https://angular.io/cli/generate)) to see additional options. The following commands are available within this shortcut:

- **component** · Generates a component at folder `shared/components`, declared & exported into `SharedModule` with prefix `app`.
- **directive** · Generates a directive at folder `shared/directives`, declared & exported into `SharedModule` with prefix `app`.
- **guard** · Generates a guard at folder `guards`, and auto-imported into the root module (by default is `AppModule`).
- **pipe** · Generates a pipe at folder `shared/pipes`, declared & exported into `SharedModule`.
- **service** · Generates a service at folder `core`, and auto-imported into the root module (by default is `AppModule`).
- **view** · Generates a component at folder `views`, declared into `ViewsModule` with prefix `view`.


## Cordova short-commands available

Run `npm run cordova:<command> -- <options>` to use any common Cordova command. Look at the documentation for ([Cordova CLI](https://cordova.apache.org/docs/en/latest/reference/cordova-cli/index.html)) to see additional options. The following commands are available within this shortcut:

- **build**
- **clean**
- **platform**
- **plugin**
- **run**

### Cordova resources (icon & splashscreen)

Run `npm run cordova:resources -- <platform>` to generate icons & splashscreens resources for the application. The available platforms are `android` & `ios`. It also copies the platform's main icon into `src/assets/images/` folder.

The 3rd party package used in this command is [cordova-res](https://www.npmjs.com/package/cordova-res).

### Cordova release

Run `npm run release:keystore -- <alias>` to generate a Private Key for Android (only the first time).

Run `npm run ngx-cordova:build-prod -- android --release` to build the application and preparing it the generated APK to sign with a release key. After that, run `npm run release:apk -- --alias=<alias> --name=<appName> --version=<appVersion>` to sign it.

For more detailed info see [RELEASE.md](RELEASE.md).


## Compiling the application

Run `npm run ngx-cordova:<command> -- <options>` to join Angular's build with a common Cordova's command. The following commands are available within this shortcut:

- **build** · Builds **without** *AoT* & *Production Mode*, and immediately executes `npm run cordova:build`.
- **build-prod** · Builds with *AoT* & *Production Mode*, and immediately executes `npm run cordova:build`.
- **run** · Builds **without** *AoT* & *Production Mode*, and immediately executes `npm run cordova:run`.
- **run-prod** · Builds with *AoT* & *Production Mode*, and immediately executes `npm run cordova:run`.

You can also provide options to its last command (*cordova:\** related command, explained before).


-----

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
