import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormValidatorPageRoutingModule } from './form-validator-routing.module';

import { FormValidatorPage } from './form-validator.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    FormValidatorPageRoutingModule
  ],
  declarations: [FormValidatorPage]
})
export class FormValidatorPageModule {}
