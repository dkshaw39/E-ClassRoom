import { ModalCreatenotesPage } from './../modal-createnotes/modal-createnotes.page';
import { ModalController } from '@ionic/angular';
import { NotesService } from './../../services/notes.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedSubjectDataService } from 'src/app/services/shared-subject-data.service';
import { Notes } from 'src/app/models/notes';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-noteshistory',
  templateUrl: './noteshistory.page.html',
  styleUrls: ['./noteshistory.page.scss'],
})
export class NoteshistoryPage implements OnInit, OnDestroy {

  classroomcode: string;
  subject: string;
  notes: Notes[];
  subs: Subscription[] = []; // storing all the subscription

  constructor(private sharedSubjectData: SharedSubjectDataService, private notesService: NotesService,
              private modalController: ModalController) { }

  ngOnInit() {
    this.subs.push(this.sharedSubjectData.classroomcode.subscribe(clsroomcode => this.classroomcode = clsroomcode));
    this.subs.push(this.sharedSubjectData.subject.subscribe(sub => this.subject = sub));
    this.subs.push(this.notesService.getExamForSubject(this.classroomcode, this.subject).subscribe(notes => {
      this.notes = notes;
    }));
  }

  ngOnDestroy() {
    this.subs.forEach(sub => {
      sub.unsubscribe();
    });
  }

  async addItem(){
    const modal = await this.modalController.create({
      component: ModalCreatenotesPage,
      componentProps: {classroomcode: this.classroomcode, subject: this.subject}
      // cssClass: 'float-modal'
    });
    modal.present();
  }
}
