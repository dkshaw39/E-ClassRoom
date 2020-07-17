import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginSimplePage } from './login-simple.page';

const routes: Routes = [
  {
    path: '',
    component: LoginSimplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginSimplePageRoutingModule {}
