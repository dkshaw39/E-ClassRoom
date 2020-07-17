import { Assignment } from './../models/assignment';
import { take, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  private assignments = new BehaviorSubject<Assignment[]>([
    {
      ID: 'ABC1',
      name: 'Algebra',
      classroomcode: 'CLA-ABC',
      subject: 'Math',
      status: 'Completed',
      filepath: 'Location'
    },
    {
      ID: 'ABC2',
      name: 'Trigonometry',
      classroomcode: 'CLA-ABC',
      subject: 'Math',
      status: 'Completed',
      filepath: 'Location'
    },
    {
      ID: 'ABC3',
      name: 'Tulsi Das',
      classroomcode: 'CLA-ABC',
      subject: 'Hindi',
      status: 'Completed',
      filepath: 'Location'
    }
  ]);

  constructor() { }

  public getAllAssignment() {
    return this.assignments.asObservable();
  }

public getAssignmentForSubject(classroomcode: string, subject: string){
    // tslint:disable-next-line: max-line-length
    return this.getAllAssignment().pipe(map(assignments =>  assignments.filter(assign => assign.classroomcode === classroomcode && assign.subject === subject)));
  }
  public add(ID: string, name: string, classroomcode: string, subject: string, filepath: string){
    const newAssign: Assignment = {
      ID: ID,
      name: name,
      classroomcode: classroomcode,
      subject: subject,
      status: 'Assigned',
      filepath: filepath
    };
    this.assignments.pipe(take(1)).subscribe(cls => {
      this.assignments.next(cls.concat(newAssign));
    });
  }
}
