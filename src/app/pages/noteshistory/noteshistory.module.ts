import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoteshistoryPage } from './noteshistory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule
  ],
  declarations: [NoteshistoryPage],
  entryComponents: [NoteshistoryPage]
})
export class NoteshistoryPageModule {}
