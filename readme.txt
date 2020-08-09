--for local storage
npm i @ionic/storage 
ionic cordova plugin add cordova-sqlite-storage

--for Encryption
npm i crypto-js --save

--for multiple language
npm i @ngx-translate/core @ngx-translate/http-loader

-- cordova install globally
npm install -g ionic cordova

--SHA1 - Debug
keytool -list -v \ -alias androiddebugkey -keystore %USERPROFILE%\.android\debug.keystore

--CORDOVA is not working in web so we need to add cordova.js into www folder 
ionic cordova emulate browser

--firebase Login
npm install firebase @angular/fire 
ng add @angular/fire

ionic cordova plugin add cordova-plugin-firebase-authentication
npm install @ionic-native/firebase-authentication






Issues
1. Login api(not able to detect invalid credentials)

autologin in authGuard
Form value with string