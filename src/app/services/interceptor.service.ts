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
        console.log(cloneReq.headers);
        return next.handle(cloneReq);
      }),
      catchError((error) => {
        console.log(error);
        this.alertController.create({
          header: 'Error',
          message: JSON.stringify(error),
          buttons: ['OK']
        }).then(alert => alert.present());
        throw new Error(error);
      })
    );
  }

  private addToken(request: HttpRequest<any>, encryptedToken) {
    if (encryptedToken) {
      const token = this.encryptDataService.decrypt(encryptedToken)
        .access_token;
      console.log(token);
      const clone = request.clone({
        setHeaders: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'bearer ' + token,
        },
      });
      return clone;
    }
    return request;
  }
}
