import { AlertController } from '@ionic/angular';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { EncryptDataService } from './encrypt-data.service';
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable, from, merge } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(
    private storage: Storage,
    private encryptDataService: EncryptDataService,
    private alertController: AlertController
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const access_token = this.storage.get('ACCESS_TOKEN');

    return from(access_token).pipe(
      mergeMap((token) => {
        const cloneReq = this.addToken(req, token);
        return next.handle(cloneReq);
      }),
      catchError((error) => {
        console.log(error);
        if (error.status === 401) {
          this.showAlert('Unauthorized User');
        } else if (error.status === 400) {
          this.showAlert(
            error.error.ModelState
              ? JSON.stringify(error.error.ModelState)
              : (
                error.error.error_description
                ? error.error.error_description
                : error.error.Message
              )
              );
        } else {
          this.showAlert(error.statusText);
        }
        throw new Error(error);
      })
    );
  }

  private addToken(request: HttpRequest<any>, encryptedToken) {
    if (encryptedToken) {
      const token = this.encryptDataService.decrypt(encryptedToken)
        .access_token;
      const clone = request.clone({
        setHeaders: {
          // 'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Type': 'application/json',
          Authorization: 'bearer ' + token,
        },
      });
      return clone;
    }
    return request;
  }

  private showAlert(msg) {
    const alert = this.alertController.create({
      message: msg,
      header: 'Error',
      buttons: ['OK'],
    });
    alert.then((alt) => alt.present());
  }
}
