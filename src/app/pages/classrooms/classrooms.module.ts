import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassroomsPageRoutingModule } from './classrooms-routing.module';

import { ClassroomsPage } from './classrooms.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassroomsPageRoutingModule,
    TranslateModule
  ],
  declarations: [ClassroomsPage]
})
export class ClassroomsPageModule {}
