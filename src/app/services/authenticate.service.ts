import { TranslateService } from '@ngx-translate/core';
import { EncryptDataService } from './encrypt-data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Platform, AlertController, LoadingController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { catchError, tap, take } from 'rxjs/operators';

const TOKEN_KEY = 'ACCESS_TOKEN';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  authorizationString = '';
  url = environment.url;
  public userID = null;
  private userAuthenticationState = new BehaviorSubject(false);
  tokenHttpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  };

  // Constructor

  constructor(
    private storage: Storage,
    private platform: Platform,
    private http: HttpClient,
    private alrtController: AlertController,
    private loadingController: LoadingController,
    private encryptDataService: EncryptDataService,
    private translate: TranslateService
  ) {
    platform.ready().then(() => {
      this.autoLogin();
    });
  }

  // Authentication observable to impact all pages(specially App.page.ts)
  getUserAuthenticationObservable() {
    return this.userAuthenticationState;
  }
  // getter for authentication for AuthGuard
  getUserAuthentication() {
    return this.userAuthenticationState.value;
  }

  // user validation header

  authenticateHeader() {
    let authorizationString = '';
    this.storage.get(TOKEN_KEY).then((encryptToken) => {
      const token = this.encryptDataService.decrypt(encryptToken);
      console.log(token);
      console.log(token.access_token);
      console.log(token.token_type);
      authorizationString = 'bearer ' + token.access_token;
      console.log(authorizationString);
      console.log({
        headers: new HttpHeaders().set('Authorization', authorizationString),
      });
    });
    const reqOpts = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: authorizationString,
      }),
    };
    return reqOpts;
  }

  // AutoLogin

  autoLogin() {
    this.storage.get(TOKEN_KEY).then((encryptToken) => {
      if (encryptToken) {
        const token = this.encryptDataService.decrypt(encryptToken);
        if (new Date() <= new Date(token['.expires'])) {
          this.userAuthenticationState.next(true);
          this.userID = token.userName;
          this.authorizationString = 'bearer ' + token.access_token;
        }
      } else {
        this.logout();
      }
    });
  }

  // OTP Request

  requestOTP(credentials) {
    const spinner = this.loadingController.create({
      message: this.translate.instant('LOADING.Generating_OTP'),
      spinner: 'lines-small',
    });
    spinner.then((spin) => spin.present());
    const response = this.http
      .post(this.url.concat('/api/Notification/VerifyMobile'), credentials)
      .pipe(
        take(1),
        tap((res) => {
          console.log(res);
          spinner.then((spin) => spin.dismiss());
        }),
        catchError((e) => {
          console.log(e);
          spinner.then((spin) => spin.dismiss());
          this.showAlert(e.error.Message + ' ' + e.statusText + ' ' + e.name);
          throw new Error(e);
        })
      );
    return response;
  }

  // to register the user once he get the OTP

  register(credentials) {
    // spinner for validation of OTP and registration
    const spinner = this.loadingController.create({
      message: this.translate.instant('LOADING.Signing'),
      spinner: 'lines-small',
    });
    spinner.then((spin) => spin.present());
    // Post method to sign up
    const response = this.http
      .post(this.url.concat('/api/Account/Register'), credentials)
      .pipe(
        take(1),
        tap((res) => {
          // spinner dismiss after response
          spinner.then((spin) => spin.dismiss());
          console.log(res);
          // if response is success means user created
          if (res === 'Success') {
            this.showAlert('Welcome', 'Title');
          } else {
            this.showAlert(res);
          }
        }),
        // if there is no other issue like network connection then
        catchError((e) => {
          console.log(e);
          spinner.then((spin) => spin.dismiss());
          this.showAlert(e.error.Message + ' ' + e.statusText);
          throw new Error(e);
        })
      );
    return response;
  }

  // user login method

  login(credentials) {
    // loader for login
    const loading = this.loadingController.create({
      message: this.translate.instant('LOADING.Logging'),
      spinner: 'lines-small',
    });
    loading.then((spin) => spin.present());
    // login post request
    const response = this.http
      .post(this.url.concat('/token'), credentials, this.tokenHttpHeaders)
      .pipe(
        take(1),
        tap((res) => {
          // filter required to check the token
          // storing data in local
          this.storage.set(TOKEN_KEY, this.encryptDataService.encrypt(res));
          // setting user Authentication to true
          this.userAuthenticationState.next(true);
          // loader dismissal
          loading.then((spin) => spin.dismiss());
        }),
        // error due to any issue like network etc
        catchError((e) => {
          loading.then((spin) => spin.dismiss());
          // this.showAlert(e.error.error ? this.translate.instant('ALERT.User_password_incorrect') : (e.error.isTrusted ?
          //   this.translate.instant('ALERT.Connection_Error') : this.translate.instant('ALERT.Not_register_user')));
          throw new Error(e);
        })
      );
    return response;
  }

  // Logout

  logout() {
    // setting user Authentication to false
    this.storage.remove(TOKEN_KEY).then(() => {
      this.userAuthenticationState.next(false);
    });
  }

  changePassword(details) {
    // loader
    const loading = this.loadingController.create({
      message: this.translate.instant('SETTING.Changing'),
      spinner: 'lines-small',
    });
    loading.then((spin) => spin.present());
    const response = this.http
      .post(this.url.concat('/api/Account/ChangePassword'), details)
      .pipe(
        take(1),
        tap((res) => {
          loading.then((spin) => spin.dismiss());
          this.showAlert('Password Changed Successfully', 'Message');
        }),
        catchError((e) => {
          loading.then((spin) => spin.dismiss());
          throw new Error();
        })
      );
    return response;
  }

  // showing Alert message for any operation
  showAlert(msg, header?) {
    const alert = this.alrtController.create({
      message: msg,
      header: header ? '' : this.translate.instant('ALERT.Error'),
      buttons: ['OK'],
    });
    alert.then((alt) => alt.present());
  }
}
