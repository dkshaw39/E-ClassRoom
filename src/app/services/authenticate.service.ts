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
  providedIn: 'root'
})
export class AuthenticateService {

  url = environment.url;
  public userID = null;
  private userAuthenticationState = new BehaviorSubject(false);
  tokenHttpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };

  constructor(private storage: Storage, private platform: Platform, private http: HttpClient,
              private alrtController: AlertController, private loadingController: LoadingController,
              private encryptDataService: EncryptDataService, private translate: TranslateService) {
     platform.ready().then(() => {
      this.autoLogin();
    });
  }

  autoLogin() {
    this.storage.get(TOKEN_KEY).then(encryptToken => {
      if ( encryptToken ) {
        const token = this.encryptDataService.decrypt(encryptToken);
        if (new Date() <= new Date(token['.expires'])) {
          this.userAuthenticationState.next(true);
          this.userID = token.userName;
        }
      } else {
        this.logout();
      }
    });
  }

  requestOTP(credentials) {
    const spinner = this.loadingController.create({
      message: this.translate.instant('LOADING.Generating_OTP'),
      spinner: 'lines-small'
    });
    spinner.then(spin => spin.present());
    const response = this.http.post(this.url.concat('/api/Notification/VerifyMobile'), credentials).pipe(
      take(1),
      tap(res => {
        console.log(res);
        spinner.then(spin => spin.dismiss());
      }),
      catchError(e => {
        console.log(e);
        spinner.then(spin => spin.dismiss());
        this.showAlert(e.error.Message + ' ' + e.statusText + ' ' + e.name);
        throw new Error(e);
      })
    );
    return response;
  }
  // register(credentials){
  //   return this.http.post(this.url.concat('/api/Account/Register'), credentials).pipe(
  //       catchError(e => {
  //       console.log(e);
  //       this.showAlert(e.error.Message + ' ' + e.statusText);
  //       throw new Error(e);
  //     })
  //   );
  // }

  // to register the user once he get the OTP
  register(credentials) {
    // spinner for validation of OTP and registration
    const spinner = this.loadingController.create({
      message: this.translate.instant('LOADING.Signing'),
      spinner: 'lines-small'
    });
    spinner.then(spin => spin.present());
    // Post method to sign up
    const response = this.http.post(this.url.concat('/api/Account/Register'), credentials).pipe(take(1),
    tap( res => {
      // spinner dismiss after response
      spinner.then(spin => spin.dismiss());
      console.log(res);
      // if response is success means user created
      if (res === 'Success') {
        this.showAlert('Welcome', 'Title');
      }else {
        this.showAlert(res);
      }
    }),
    // if there is no other issue like network connection then
      catchError(e => {
        console.log(e);
        spinner.then(spin => spin.dismiss());
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
      spinner: 'lines-small'
    });
    loading.then(spin => spin.present());
    // login post request
    const response = this.http.post(this.url.concat('/token'), credentials, this.tokenHttpHeaders).pipe(take(1), tap(res => {
        console.log(res);
        // filter required to check the token
        // storing data in local
        this.storage.set(TOKEN_KEY, this.encryptDataService.encrypt(res));
        // setting user Authentication to true
        this.userAuthenticationState.next(true);
        // loader dismissal
        loading.then(spin => spin.dismiss());
      }),
      // error due to any issue like network etc
      catchError(e => {
        console.log(e);
        loading.then(spin => spin.dismiss());
        this.showAlert(e.error.error ? this.translate.instant('ALERT.User_password_incorrect') : (e.error.isTrusted ?
          this.translate.instant('ALERT.Connection_Error') : this.translate.instant('ALERT.Not_register_user')));
        throw new Error(e);
      })
    );
    return response;
  }

  logout() {
    // setting user Authentication to false
    this.storage.remove(TOKEN_KEY).then(() => {
      this.userAuthenticationState.next(false);
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
  // showing Alert message for any operation
  showAlert(msg, header?) {
    const alert = this.alrtController.create({
      message: msg,
      header: (header ? '' : this.translate.instant('ALERT.Error')),
      buttons: ['OK']
    });
    alert.then(alt => alt.present());
  }
}
