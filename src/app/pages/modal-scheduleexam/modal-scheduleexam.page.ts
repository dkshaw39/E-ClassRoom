import { ExamService } from './../../services/exam.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-scheduleexam',
  templateUrl: './modal-scheduleexam.page.html',
  styleUrls: ['./modal-scheduleexam.page.scss'],
})
export class ModalScheduleexamPage implements OnInit {

  classroomcode: string;
  subject: string;

  constructor(private modalController: ModalController, private formBuilder: FormBuilder,
              private examService: ExamService, private navParams: NavParams) { }


  get id(){
    return this.assignmentForm.get('id');
  }

  get name(){
    return this.assignmentForm.get('name');
  }

  get path(){
    return this.assignmentForm.get('path');
  }

  assignmentForm = this.formBuilder.group({
    id: ['', [Validators.required]],
    name: ['', [Validators.required, Validators.minLength(6)]],
    clsroomcode: ['', [Validators.required]],
    sub: ['', [Validators.required]],
    path: ['', [Validators.required]]
  });

  ngOnInit() {
    this.classroomcode = this.navParams.get('classroomcode');
    this.subject = this.navParams.get('subject');
  }
  closeModal(){
    this.modalController.dismiss();
  }
  onSubmit(){
    this.examService.add(this.id.value, this.name.value, this.classroomcode, this.subject, this.path.value);
    this.closeModal();
  }

}
