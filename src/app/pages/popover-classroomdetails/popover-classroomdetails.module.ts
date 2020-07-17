import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { POPOVERClassroomdetailsPageRoutingModule } from './popover-classroomdetails-routing.module';

import { POPOVERClassroomdetailsPage } from './popover-classroomdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    POPOVERClassroomdetailsPageRoutingModule
  ],
  declarations: [POPOVERClassroomdetailsPage]
})
export class POPOVERClassroomdetailsPageModule {}
