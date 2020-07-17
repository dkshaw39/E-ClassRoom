import { ModalCreateassignmentPage } from './../modal-createassignment/modal-createassignment.page';
import { AssignmentService } from './../../services/assignment.service';
import { Assignment } from './../../models/assignment';
import { SharedSubjectDataService } from './../../services/shared-subject-data.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-assignmenthistory',
  templateUrl: './assignmenthistory.page.html',
  styleUrls: ['./assignmenthistory.page.scss'],
})
export class AssignmenthistoryPage implements OnInit, OnDestroy {

  classroomcode: string;
  subject: string;
  assignments: Assignment[];
  subs: Subscription[] = []; // storing all the subscription

  constructor(private sharedSubjectData: SharedSubjectDataService, private assignmentService: AssignmentService,
              private modalController: ModalController) { }

  ngOnInit() {
    this.subs.push(this.sharedSubjectData.classroomcode.subscribe(clsroomcode => this.classroomcode = clsroomcode));
    this.subs.push(this.sharedSubjectData.subject.subscribe(sub => this.subject = sub));
    this.subs.push(this.assignmentService.getAssignmentForSubject(this.classroomcode, this.subject).subscribe( assigns => {
      this.assignments = assigns;
    }));
  }

  ngOnDestroy() {
    this.subs.forEach(sub => {
      sub.unsubscribe();
    });
  }

  async addItem(){
    const modal = await this.modalController.create({
      component: ModalCreateassignmentPage,
      componentProps: {classroomcode: this.classroomcode, subject: this.subject}
      // cssClass: 'float-modal'
    });
    modal.present();
  }
}
