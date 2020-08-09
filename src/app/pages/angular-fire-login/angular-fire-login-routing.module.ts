import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngularFireLoginPage } from './angular-fire-login.page';

const routes: Routes = [
  {
    path: '',
    component: AngularFireLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularFireLoginPageRoutingModule {}
