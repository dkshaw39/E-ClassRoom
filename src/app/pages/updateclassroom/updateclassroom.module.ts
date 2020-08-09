import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateclassroomPageRoutingModule } from './updateclassroom-routing.module';

import { UpdateclassroomPage } from './updateclassroom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UpdateclassroomPageRoutingModule
  ],
  declarations: [UpdateclassroomPage]
})
export class UpdateclassroomPageModule {}
