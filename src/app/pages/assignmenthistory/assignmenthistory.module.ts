import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssignmenthistoryPage } from './assignmenthistory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [AssignmenthistoryPage],
  entryComponents: [AssignmenthistoryPage]
})
export class AssignmenthistoryPageModule {}
