import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateclassroomPageRoutingModule } from './updateclassroom-routing.module';

import { UpdateclassroomPage } from './updateclassroom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateclassroomPageRoutingModule
  ],
  declarations: [UpdateclassroomPage]
})
export class UpdateclassroomPageModule {}
