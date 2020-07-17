import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormValidatorPage } from './form-validator.page';

const routes: Routes = [
  {
    path: '',
    component: FormValidatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormValidatorPageRoutingModule {}
