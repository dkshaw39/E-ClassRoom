import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: Form;
  constructor() { }

  ngOnInit() {
  }
  cardClick(){
  }
}
