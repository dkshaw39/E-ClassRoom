import { AssignmentService } from './../../services/assignment.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-createassignment',
  templateUrl: './modal-createassignment.page.html',
  styleUrls: ['./modal-createassignment.page.scss'],
})
export class ModalCreateassignmentPage implements OnInit {

  classroomcode: string;
  subject: string;

  constructor(private modalController: ModalController, private formBuilder: FormBuilder,
              private assignmentServer: AssignmentService, private navParams: NavParams) { }


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
    this.assignmentServer.add(this.id.value, this.name.value, this.classroomcode, this.subject, this.path.value);
    this.closeModal();
  }

}
