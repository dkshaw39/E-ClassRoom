import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
import { IonSlides, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-firebase-login',
  templateUrl: './firebase-login.page.html',
  styleUrls: ['./firebase-login.page.scss'],
})
export class FirebaseLoginPage implements OnInit {

  @ViewChild('slides', {
    static: true
  }) slides: IonSlides;
  slideOptions = {
    initialSlide: 0,
    speed: 400,
    effect: 'slide'
  };

  verID = '';

  constructor(private firebaseAuthentication: FirebaseAuthentication,
              private router: Router,
              private formBuilder: FormBuilder,
              private alertController: AlertController) {
                firebaseAuthentication.onAuthStateChanged().subscribe(user => {
                  if ( user ) {
                    router.navigate(['']);
                  } else {
                    router.navigate(['firebase-login']);
                  }
                });
  }

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
    this.slides.lockSwipeToNext(true);
  }

  requestOTP(){
    try {
      this.firebaseAuthentication.verifyPhoneNumber('+91' + this.MobileNumber.value, 30000).then(verificationID => {
        console.log(verificationID);
        this.verID = verificationID;
        this.slides.lockSwipeToNext(false);
        this.slides.slideNext();
        this.slides.lockSwipeToPrev(true);
      });
    } catch (error) {
      console.log(error);
      this.alertController.create({
        header: 'Error',
        message: error
      }).then( alt => alt.present());
    }
  }


  onSubmit(){
    this.firebaseAuthentication.signInWithVerificationId(this.verID, '' + this.OTP.value).then(user => {
      console.log(user);
    });
  }

  editMobile(){
    this.slides.lockSwipeToPrev(false);
    this.slides.slidePrev();
    this.slides.lockSwipeToNext(true);
  }


}
