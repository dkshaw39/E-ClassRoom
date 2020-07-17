import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { POPOVERClassroomdetailsPage } from './popover-classroomdetails.page';

const routes: Routes = [
  {
    path: '',
    component: POPOVERClassroomdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class POPOVERClassroomdetailsPageRoutingModule {}
