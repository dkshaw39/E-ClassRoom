import { AngularFireModule } from '@angular/fire';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirebaseLoginPageRoutingModule } from './firebase-login-routing.module';

import { FirebaseLoginPage } from './firebase-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FirebaseLoginPageRoutingModule,
    AngularFireModule
  ],
  declarations: [FirebaseLoginPage]
})
export class FirebaseLoginPageModule {}
