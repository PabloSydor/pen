# Release as Cordova Application

Depending on which platform are you going to release the application, follow its steps in order.

First of all, before every build to release, open the file `cordova/config.xml` and change the application's version.


-----
## Android

Make sure you have at least the following URIs in your *Windows $PATH*:

- `C:\Users\<YOUR_USER>\AppData\Local\Android\sdk\platform-tools;`
- `C:\Users\<YOUR_USER>\AppData\Local\Android\sdk\build-tools\<ANY_VERSION>;`
- `C:\Program Files\Java\<JDK_VERSION>\bin;`

First run `npm run ngx-cordova:build-prod -- android --release` to build the application. Note: The flag `--release` will prepare the generated APK to sign with a release key.

Then, run `npm run release:apk -- --alias=<alias> --name=<appName> --version=<appVersion>`. Also, you can run step by step the following commands that form the previous one mentioned:

1. To sign the unsigned APK:

```bash
$ jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ./cordova/keystore-release.jks ./cordova/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk {ALIAS}
```

2. To optimize APK:

```bash
$ zipalign -v 4 ./cordova/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk ./cordova/dist/{APP_NAME}-v{APP_VERSION}r.apk
```

3. To verify that the APK is signed:

```bash
$ apksigner.bat verify ./cordova/dist/{APP_NAME}-v{APP_VERSION}r.apk
```


### Android - Generate a Private Key (only the first time)

Run `npm run release:keystore -- <alias>`

OR

```bash
$ keytool -genkey -v -keystore ./cordova/keystore-release.jks -keyalg RSA -keysize 2048 -validity 10000 -alias {ALIAS}
```


-----
## iOS

1. Run `npm run ngx-cordova:build-prod -- ios` to build the application.

2. Open the file `.xcworkspace` generated into `./cordova/platforms/ios/` with XCode and *archive* it.
