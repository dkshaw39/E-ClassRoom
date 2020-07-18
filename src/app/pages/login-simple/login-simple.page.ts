import { LanguageService } from './../../services/language.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login-simple',
  templateUrl: './login-simple.page.html',
  styleUrls: ['./login-simple.page.scss'],
})
export class LoginSimplePage implements OnInit {

  allLanguages = [];
  currentLanguage = '';

  constructor(
    private formBuilder: FormBuilder,
    private authenticate: AuthenticateService,
    private router: Router,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private languageService: LanguageService
  ) {}

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  loginForm = this.formBuilder.group({
    username: [
      '',
      [Validators.required, Validators.pattern('(0/91)?[7-9][0-9]{9}')],
    ],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  passwordType = 'password';
  passwordIcon = 'eye-off-outline';

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon =
      this.passwordIcon === 'eye-off-outline'
        ? 'eye-outline'
        : 'eye-off-outline';
  }

  ngOnInit() {
    this.allLanguages = this.languageService.getLanguage();
    this.currentLanguage = this.languageService.currentLanguage.value;
  }

  selectLanguage(event) {
    this.languageService.setLanguage(event.target.value);
  }
  // async onSubmit(){
  //   const loading = await this.loadingController.create({
  //     message: 'Verifying',
  //     spinner: 'lines-small'
  //   });
  //   loading.present();
  //   const formData = 'username=' + this.username.value + '&password=' + this.password.value + '&grant_type=password';
  //   console.log(formData);
  //   this.authenticate.login(formData).subscribe();
  //   loading.dismiss();
  // }
  onSubmit() {
    const formData =
      'username=' +
      this.username.value +
      '&password=' +
      this.password.value +
      '&grant_type=password';
    this.authenticate.login(formData).subscribe();
  }
}
