import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

export class Sub{
  public Id?: string;
  public Subject: string;
  public Teacher?: string;
}

@Component({
  selector: 'app-updateclassroom',
  templateUrl: './updateclassroom.page.html',
  styleUrls: ['./updateclassroom.page.scss'],
})


export class UpdateclassroomPage implements OnInit {
  Sub = new Sub();
  dataArray = [];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dataArray.push(new Sub());
  }

  addFields(){
    this.dataArray.push(new Sub());
  }

  removeFields(index){
    this.dataArray.splice(index, 1);
  }

  addSubject(){
    console.log(this.dataArray.values);
  }

}
