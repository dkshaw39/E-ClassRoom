import { LanguageService } from './../../services/language.service';
import { catchError } from 'rxjs/operators';
import { AngularfireService } from './../../services/angularfire.service';
import { environment } from './../../../environments/environment';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, AlertController, LoadingController } from '@ionic/angular';
import { Validators, FormBuilder } from '@angular/forms';
import { WindowService } from 'src/app/services/window.service';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-angular-fire-login',
  templateUrl: './angular-fire-login.page.html',
  styleUrls: ['./angular-fire-login.page.scss'],
})
export class AngularFireLoginPage implements OnInit {

  @ViewChild('slides', {
    static: true
  }) slides: IonSlides;
  slideOptions = {
    initialSlide: 0,
    speed: 400,
    effect: 'slide'
  };

  verID = '';
  windowRef: any;

allLanguages = [];
currentLanguage = '';

  constructor(private alertController: AlertController,
              private formBuilder: FormBuilder,
              private win: WindowService,
              private angularFireService: AngularfireService,
              private router: Router,
              private loading: LoadingController,
              private languageService: LanguageService) {}

  mobileForm = this.formBuilder.group({
    MobileNumber: ['', [Validators.required, Validators.pattern('(0/91)?[7-9][0-9]{9}')]]
  });

  signInForm = this.formBuilder.group({
    OTP: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
  });

  get MobileNumber() {
    return this.mobileForm.get('MobileNumber');
  }

  get OTP() {
    return this.signInForm.get('OTP');
  }


  ngOnInit() {
    // slide
    this.slides.lockSwipeToNext(true);
    this.allLanguages = this.languageService.getLanguage();
    this.currentLanguage = this.languageService.currentLanguage.value;
  }

  ionViewDidEnter(){
    this.windowRef = this.win.windowRef;
    firebase.initializeApp(environment.firebase);
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    this.windowRef.recaptchaVerifier.render();
  }

  selectLanguage(event) {
    this.languageService.setLanguage(event.target.value);
  }

  requestOTP(){
    const spinner = this.loading.create({
      message: 'Requesting',
      spinner: 'lines-small'
    });
    spinner.then(alt => alt.present());
    const appVerifier = this.windowRef.recaptchaVerifier;
    this.angularFireService.requestOTP(this.MobileNumber.value, appVerifier).then( result => {
      this.windowRef.confirmationResult = result;
      this.slides.lockSwipeToNext(false);
      this.slides.slideNext();
      this.slides.lockSwipeToPrev(true);
    }).catch(error => console.log(error));
    spinner.then(alt => alt.dismiss());
  }


  onOTPSubmit(){
    const spinner = this.loading.create({
      message: 'Validating',
    });
    spinner.then(alt => alt.present());
    this.windowRef.confirmationResult.confirm(this.OTP.value).then(result => {
      this.router.navigate(['']);
    })
    .catch( error => console.log(error));
    spinner.then(alt => alt.dismiss());
  }

  editMobile(){
    this.slides.lockSwipeToPrev(false);
    this.slides.slidePrev();
    this.slides.lockSwipeToNext(true);
  }

}
