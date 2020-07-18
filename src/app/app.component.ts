import { LanguageService } from './services/language.service';
import { Component,  ViewChild} from '@angular/core';

import {  Platform,  AlertController,  IonRouterOutlet } from '@ionic/angular';
import {  SplashScreen } from '@ionic-native/splash-screen/ngx';
import {  StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AuthenticateService } from './services/authenticate.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  @ViewChild(IonRouterOutlet, {
    static: false
  }) routerOutlet: IonRouterOutlet;

  allLanguages = [];
  currentLanguage = '';

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private alertController: AlertController,
    private router: Router,
    public authenticate: AuthenticateService,
    private languageService: LanguageService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      // status bar color
      this.statusBar.backgroundColorByHexString('#e3e3e3');
      this.splashScreen.hide();
      // closing the app by pressing back button
      this.platform.backButton.subscribeWithPriority(0, async () => {
        if ( this.router.url === '' || this.router.url === '/' ||
                    this.router.url === '/classrooms' || this.router.url === '/login') {
          const alert = await this.alertController.create({
            header: 'Close Application',
            message: 'Do you want to close the App?',
            buttons: [
              {
                text: 'Cancel',
                role: 'cancel'
              },
              {
                text: 'Exit',
                handler: () => {
                  navigator['app'].exitApp();
                }
              }
            ]
          });

          await alert.present();

        } else if (this.routerOutlet && this.routerOutlet.canGoBack()) {
          this.routerOutlet.pop();
        }
      });
    });
    // after checking stored token , if the user is authenticate then move to root page else login page
    this.authenticate.getUserAuthenticationObservable().subscribe( status => {
      if (status){
        this.router.navigate(['']);
      }else {
        this.router.navigate(['user']);
      }
    });
    this.languageService.setInitialLanguage();
    this.allLanguages = this.languageService.getLanguage();
    this.languageService.getCurrentLanguage().subscribe( lang => this.currentLanguage = lang);
  }

  changeLanguage(event){
    this.languageService.setLanguage(event.target.value);
  }

  logout_btn(){
    this.authenticate.logout();
  }
}
