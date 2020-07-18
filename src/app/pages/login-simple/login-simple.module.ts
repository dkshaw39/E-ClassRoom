import { TranslateModule } from '@ngx-translate/core';
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginSimplePageRoutingModule } from './login-simple-routing.module';

import { LoginSimplePage } from './login-simple.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LoginSimplePageRoutingModule,
    TranslateModule
  ],
  declarations: [LoginSimplePage]
})
export class LoginSimplePageModule{}
