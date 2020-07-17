import { AlertController } from '@ionic/angular';
import { AuthenticateService } from './../services/authenticate.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authenticate: AuthenticateService, private router: Router,
              private alertCtrl: AlertController){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.authenticate.autoLogin();
      if (!this.authenticate.getUserAuthentication()) {
      // this.alertPresent();
      this.router.navigate(['/login']);
    }
      return this.authenticate.getUserAuthentication();
  }

  async alertPresent(){
    await this.alertCtrl.create({
      header: 'Message',
      subHeader: 'Authentication Failed',
      buttons: [
        {
          text: 'Login',
          handler: () => {
            this.router.navigate(['/login']);
          }
        }
      ]
    }).then(alt => {
      alt.present();
    });
  }
}
