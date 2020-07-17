import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamhistoryPage } from './examhistory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [ExamhistoryPage],
  entryComponents: [ExamhistoryPage]
})
export class ExamhistoryPageModule {}
