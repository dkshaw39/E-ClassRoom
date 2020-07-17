import { ExamhistoryPageModule } from './../examhistory/examhistory.module';
import { NoteshistoryPageModule } from './../noteshistory/noteshistory.module';
import { AssignmenthistoryPageModule } from './../assignmenthistory/assignmenthistory.module';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassSubjectPageRoutingModule } from './class-subject-routing.module';

import { ClassSubjectPage } from './class-subject.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassSubjectPageRoutingModule,
    SuperTabsModule,
    AssignmenthistoryPageModule,
    NoteshistoryPageModule,
    ExamhistoryPageModule
  ],
  declarations: [ClassSubjectPage]
})
export class ClassSubjectPageModule {}
