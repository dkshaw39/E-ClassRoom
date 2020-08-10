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
      const cloneReq = this.addToken(req, 'dummy');
      return next.handle(cloneReq);
    // const access_token = this.storage.get('ACCESS_TOKEN');

    // return from(access_token).pipe(
    //   mergeMap((token) => {
    //     const cloneReq = this.addToken(req, token);
    //     return next.handle(cloneReq);
    //   }),
    //   catchError((error) => {
    //     console.log(error);
    //     if (error.status === 401) {
    //       this.showAlert('Unauthorized User');
    //     } else if (error.status === 400) {
    //       this.showAlert(
    //         error.error.ModelState
    //           ? JSON.stringify(error.error.ModelState)
    //           : (
    //             error.error.error_description
    //             ? error.error.error_description
    //             : error.error.Message
    //           )
    //           );
    //     } else {
    //       this.showAlert(error.statusText);
    //     }
    //     throw new Error(error);
    //   })
    // );
  }

  private addToken(request: HttpRequest<any>, encryptedToken) {
    if (encryptedToken) {
      // const token = this.encryptDataService.decrypt(encryptedToken).access_token;
      const token = 'H_yAgQhUa3PFfQoDhi3Iu-LPELiHq5LOqbkYl44voD6yp0yjfsfE8Wbn-T26mqgb1jqCuJiVaoE9qpblbVDxQdactcl84N3-rhzOnA3LrGSO8TdjCwSX0q35j0CKswWoOH5-eOsFWH9wIwQy9DlLRBBZKMOTsE_99PE9fLuMX2Sghztj4KZO2swDTERTt4xV_-eJczcmctDsp83JJ-CV5xwmcEDQNcxxmLSFwDg9eTCEZFe3wEqibqjPCLdfD1r8-QjXeZ2wBCLgsC0UGq-PCxxBC5XzcdaZ22vTY5dLUxx4mE1p3O6jPnWl--BaV2nk4Q76lcuBIYNo_D9Uv28VedCDrdy_VHsnk0Cziuj6mdUmdOc5eCgBF5y8qBGhbjuBfJ7mTS_Kmtv2Ohz5IYPvw1xt3EDwtMvlfm_hCkqszC83FLVWXCU8wjISnlRJ9_7XusY_t7k7R5AzaECEHur-Rf_qT3ajDGwb34duT0czzfOcxE-D_R-sRT5YfqfBRNukXG5Io_2alvbwL4-CJv1vIeUE2hszeXTpilfEjcEZSrQ';
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
