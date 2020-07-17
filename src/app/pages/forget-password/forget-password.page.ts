import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  loginForm = this.formBuilder.group({
    email: ['']
  });

  ngOnInit() {
  }
  get email(){
    return this.loginForm.get('email');
  }
onSubmit(){
console.log(this.loginForm.valid);

}
}
