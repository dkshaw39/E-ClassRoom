import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassSubjectPage } from './class-subject.page';

const routes: Routes = [
  {
    path: '',
    component: ClassSubjectPage
    // children: [
    //   {
    //     path: 'assignmenthistory',
    //     loadChildren: () => import('../assignmenthistory/assignmenthistory.module').then( m => m.AssignmenthistoryPageModule)
    //   },
    //   {
    //     path: 'noteshistory',
    //     loadChildren: () => import('../noteshistory/noteshistory.module').then( m => m.NoteshistoryPageModule)
    //   },
    //   {
    //     path: 'examhistory',
    //     loadChildren: () => import('../examhistory/examhistory.module').then( m => m.ExamhistoryPageModule)
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassSubjectPageRoutingModule {}
