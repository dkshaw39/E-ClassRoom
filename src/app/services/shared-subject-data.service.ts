import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedSubjectDataService {

  private clsroomcode = new BehaviorSubject<string>('');
  private sub = new BehaviorSubject<string>('');

  constructor() { }

  classroomcode = this.clsroomcode.asObservable();
  subject = this.sub.asObservable();

  setData(classroomcode: string, subject: string){
    this.clsroomcode.next(classroomcode);
    this.sub.next(subject);
  }

}
