import { ClassRoomService } from 'src/app/services/classroom.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';
export class ClassRoom{
  constructor( private Institute: string, private Name: string, private Section: string){}
}

@Component({
  selector: 'app-modal-addclassroom',
  templateUrl: './modal-addclassroom.page.html',
  styleUrls: ['./modal-addclassroom.page.scss'],
})
export class MODALAddclassroomPage implements OnInit {

  constructor(private modalController: ModalController, private formBuilder: FormBuilder,private classroomService: ClassRoomService) { }

  get Name(){
    return this.classForm.get('Name');
  }

  get Section(){
    return this.classForm.get('Section');
  }

  get Institute(){
    return this.classForm.get('Institute');
  }

  classForm = this.formBuilder.group({
    Institute: ['', [Validators.required]],
    Name: ['', [Validators.required]],
    Section: ['', [Validators.required]]
  });

  ngOnInit() {
  }
  closeModal(){
    this.modalController.dismiss();
  }
  onSubmit(){
    this.classroomService.add(this.Institute.value, this.Name.value, this.Section.value);
    this.closeModal();
  }
}
