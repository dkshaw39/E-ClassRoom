import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AngularFireLoginPageRoutingModule } from './angular-fire-login-routing.module';

import { AngularFireLoginPage } from './angular-fire-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AngularFireLoginPageRoutingModule,
    TranslateModule
  ],
  declarations: [AngularFireLoginPage]
})
export class AngularFireLoginPageModule {}
