import { ClassService } from 'src/app/services/class.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-addclassroom',
  templateUrl: './modal-addclassroom.page.html',
  styleUrls: ['./modal-addclassroom.page.scss'],
})
export class MODALAddclassroomPage implements OnInit {

  constructor(private modalController: ModalController, private formBuilder: FormBuilder,private classService: ClassService) { }

  get class(){
    return this.classForm.get('class');
  }

  get section(){
    return this.classForm.get('section');
  }

  get classcode(){
    return this.classForm.get('classcode');
  }

  classForm = this.formBuilder.group({
    class: ['', [Validators.required]],
    section: ['', [Validators.required, Validators.minLength(6)]],
    classcode: ['', [Validators.required, Validators.minLength(6)]]
  });

  ngOnInit() {
  }
  closeModal(){
    this.modalController.dismiss();
  }
  onSubmit(){
    this.classService.add(this.classcode.value, this.class.value, this.section.value);
    this.closeModal();
  }
}
