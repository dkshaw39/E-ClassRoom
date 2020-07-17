import { Teacher } from './../models/teacher.model';
import { Student } from './../models/student.mode';
import { Class } from './../models/class.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  public classes = new BehaviorSubject<Class[]>([
    {
      classroomcode: 'CLA-ABC',
      classname: 'Class V',
      section: 'Section A',
      students: [{ID: '1001', name: 'Deepak'}, {ID: '1002', name: 'Rahul'}, {ID: '1003', name: 'Shretha'}],
      teachers: [{ID: '101', name: 'ABC'}, {ID: '102', name: 'Raj'}, {ID: '103', name: 'Hira'}],
      subjects: ['Hindi', 'English', 'Math', 'Science', 'Geography', 'History']
    },
    {
      classroomcode: 'CLA-XYZ',
      classname: 'Class IX',
      section: 'Section B',
      students: [{ID: '1002', name: 'Rahul'}, {ID: '1003', name: 'Shretha'}],
      teachers: [{ID: '101', name: 'ABC'}, {ID: '102', name: 'Raj'}, {ID: '103', name: 'Hira'}],
      subjects: ['English', 'Math', 'Science', 'Geography', 'History']
    }
  ]);

  constructor() { }

  public getAllClass() {
    return this.classes.asObservable();
  }

public getClass(clscode: string){
    return this.classes.pipe(take(1), map( clses => {
      return clses.find(c => c.classroomcode === clscode);
    }));
    // return this.classes.filter(cls => cls.classroomCode === clscode);
  }
  public add(clscode: string, clsname: string, sec: string, studentList?: Student[], teacherList?: Teacher[], subjectList?: string[]){
    const newcls: Class = {
      classroomcode: clscode,
      classname: clsname,
      section: sec,
      students: [],
      teachers: [],
      subjects: []
    };
    this.classes.pipe(take(1)).subscribe(cls => {
      this.classes.next(cls.concat(newcls));
    });
  }
}
