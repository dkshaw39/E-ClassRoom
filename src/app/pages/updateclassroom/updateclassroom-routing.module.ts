import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateclassroomPage } from './updateclassroom.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateclassroomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateclassroomPageRoutingModule {}
