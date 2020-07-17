import {
  AuthenticateService
} from 'src/app/services/authenticate.service';
import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  Validators,
  FormBuilder
} from '@angular/forms';
import {
  IonSlides
} from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  @ViewChild('slides', {
    static: true
  }) slides: IonSlides;
  slideOptions = {
    initialSlide: 0,
    speed: 400,
    effect: 'slide'
  };

  constructor(private formBuilder: FormBuilder, private authenticateService: AuthenticateService) {}

  OTPForm = this.formBuilder.group({
    MobileNumber: ['', [Validators.required, Validators.pattern('(0/91)?[7-9][0-9]{9}')]]
  });

  signupForm = this.formBuilder.group({
    OTP: ['', [Validators.required, Validators.minLength(4)]],
    Email: ['', [Validators.required]],
    Password: ['', [Validators.required, Validators.minLength(6)]],
    ConfirmPassword: ['', [Validators.required, Validators.minLength(6)]]
  });

  passwordType = 'password';
  passwordIcon = 'eye-off-outline';

  ionViewDidEnter() {
    this.slides.lockSwipeToNext(true);
  }

  get MobileNumber() {
    return this.OTPForm.get('MobileNumber');
  }

  get OTP() {
    return this.signupForm.get('OTP');
  }

  get Email() {
    return this.signupForm.get('Email');
  }

  get Password() {
    return this.signupForm.get('Password');
  }

  get ConfirmPassword() {
    return this.signupForm.get('ConfirmPassword');
  }

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off-outline' ? 'eye-outline' : 'eye-off-outline';
  }


  ngOnInit() {}

  requestOTP() {
    this.authenticateService.requestOTP(this.OTPForm.value).subscribe(res => {
      console.log(res);
      this.signupForm.addControl('PhoneNumber', this.formBuilder.control('', [Validators.required]));
      this.signupForm.addControl('RefId', this.formBuilder.control('', [Validators.required]));
      this.signupForm.patchValue({
        PhoneNumber: res['Response'].MobileNumber,
        RefId: res['Response'].RefId
      });
      this.signupForm.value.PhoneNumber = res['Response'].MobileNumber;
      this.signupForm.value.RefID = res['Response'].RefId;
      this.slides.lockSwipeToNext(false);
      this.slides.slideNext();
      this.slides.lockSwipeToPrev(true);
    });

  }

  editMobile() {
    this.slides.lockSwipeToPrev(false);
    this.slides.slidePrev();
    this.slides.lockSwipeToNext(true);
  }

   onSubmit() {
    console.log(this.signupForm.value);
    this.authenticateService.register(this.signupForm.value).subscribe( res => {
      console.log(res);
      if (res === 'Success'){
        const formData = 'username=' + this.MobileNumber.value + '&password=' + this.Password.value + '&grant_type=password';
        this.authenticateService.login(formData).subscribe();
      }
    });
  }

}
