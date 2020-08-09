import { AuthGuard } from './../guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { AngularfireAuthGuard } from '../guards/angularfire-auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    // canActivate: [AuthGuard],
    canActivate: [AngularfireAuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('../pages/classrooms/classrooms.module').then( m => m.ClassroomsPageModule),
        pathMatch: 'full'
      },
      {
        path: 'class_subject',
        loadChildren: () => import('../pages/class-subject/class-subject.module').then( m => m.ClassSubjectPageModule)
      },
      {
        path: 'updateclassroom',
        loadChildren: () => import('../pages/updateclassroom/updateclassroom.module').then( m => m.UpdateclassroomPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
