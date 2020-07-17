import { Exam } from './../models/exam';
import { take, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  private exams = new BehaviorSubject<Exam[]>([
    {
      ID: 'ABC1',
      name: 'Trigonometry',
      classroomcode: 'CLA-ABC',
      subject: 'Math',
      status: 'Completed',
      filepath: 'Location'
    },
    {
      ID: 'ABC2',
      name: 'Algebra',
      classroomcode: 'CLA-ABC',
      subject: 'Math',
      status: 'Pending',
      filepath: 'Location'
    },
    {
      ID: 'ABC3',
      name: 'Road Engine',
      classroomcode: 'CLA-ABC',
      subject: 'English',
      status: 'Completed',
      filepath: 'Location'
    }
  ]);

  constructor() { }

  public getAllExam() {
    return this.exams.asObservable();
  }

public getExamForSubject(classroomcode: string, subject: string){
    // tslint:disable-next-line: max-line-length
    return this.getAllExam().pipe(map(exams =>  exams.filter(exam => exam.classroomcode === classroomcode && exam.subject === subject)));
  }
  public add(ID: string, name: string, classroomcode: string, subject: string, filepath: string){
    const newExam: Exam = {
      ID: ID,
      name: name,
      classroomcode: classroomcode,
      subject: subject,
      status: 'Assigned',
      filepath: filepath
    };
    this.exams.pipe(take(1)).subscribe(cls => {
      this.exams.next(cls.concat(newExam));
    });
  }
}
