import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { IndexPage } from './index.page';

const routes: Routes = [
  {
    path: 'user',
    component: IndexPage,
    children: [
      {
        path: '',
        loadChildren: () => import('../pages/login-simple/login-simple.module').then( m => m.LoginSimplePageModule),
        pathMatch: 'full',
      },
      {
        path: 'signup',
        loadChildren: () => import('../pages/signup/signup.module').then( m => m.SignupPageModule)
      },
      {
        path: 'forget-password',
        loadChildren: () => import('../pages/forget-password/forget-password.module').then( m => m.ForgetPasswordPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPageRoutingModule {}
