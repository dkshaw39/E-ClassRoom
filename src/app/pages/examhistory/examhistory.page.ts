import { ModalController } from '@ionic/angular';
import { ExamService } from './../../services/exam.service';
import { Exam } from './../../models/exam';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedSubjectDataService } from 'src/app/services/shared-subject-data.service';
import { Subscription } from 'rxjs';
import { ModalScheduleexamPage } from '../modal-scheduleexam/modal-scheduleexam.page';

@Component({
  selector: 'app-examhistory',
  templateUrl: './examhistory.page.html',
  styleUrls: ['./examhistory.page.scss'],
})
export class ExamhistoryPage implements OnInit, OnDestroy {

  classroomcode: string;
  subject: string;
  exams: Exam[];
  subs: Subscription[] = []; // storing all the subscription

  constructor(private sharedSubjectData: SharedSubjectDataService, private examService: ExamService,
              private modalController: ModalController) { }

  ngOnInit() {
    this.subs.push(this.sharedSubjectData.classroomcode.subscribe(clsroomcode => this.classroomcode = clsroomcode));
    this.subs.push(this.sharedSubjectData.subject.subscribe(sub => this.subject = sub));
    this.subs.push(this.examService.getExamForSubject(this.classroomcode, this.subject).subscribe( exams => {
      this.exams = exams;
    }));
  }

  ngOnDestroy() {
    this.subs.forEach(sub => {
      sub.unsubscribe();
    });
  }

  async addItem(){
    const modal = await this.modalController.create({
      component: ModalScheduleexamPage,
      componentProps: {classroomcode: this.classroomcode, subject: this.subject}
      // cssClass: 'float-modal'
    });
    modal.present();
  }
}
