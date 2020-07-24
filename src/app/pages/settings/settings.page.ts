import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private authenticate: AuthenticateService,
    private router: Router
  ) {}

  get OldPassword() {
    return this.passwordForm.get('OldPassword');
  }

  get NewPassword() {
    return this.passwordForm.get('NewPassword');
  }

  get ConfirmPassword() {
    return this.passwordForm.get('ConfirmPassword');
  }

  passwordForm = this.formBuilder.group({
    OldPassword: ['', [Validators.required, Validators.minLength(6)]],
    NewPassword: ['', [Validators.required, Validators.minLength(6)]],
    ConfirmPassword: ['', [Validators.required, Validators.minLength(6)]],
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

  ngOnInit() {}

  // Password Change
  onPasswordChange() {
    this.authenticate
      .changePassword(this.passwordForm.value)
      .subscribe((res) => {
        this.router.navigate(['']);
      });
  }
}
