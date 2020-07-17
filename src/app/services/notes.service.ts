import { Notes } from './../models/notes';
import { take, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private notes = new BehaviorSubject<Notes[]>([
    {
      ID: 'ABC1',
      name: 'Profit and Loss',
      classroomcode: 'CLA-ABC',
      subject: 'Math',
      status: 'New',
      filepath: 'Location'
    },
    {
      ID: 'ABC2',
      name: 'Compound Interest',
      classroomcode: 'CLA-ABC',
      subject: 'Math',
      status: 'Coming',
      filepath: 'Location'
    },
    {
      ID: 'ABC3',
      name: 'Akbar',
      classroomcode: 'CLA-ABC',
      subject: 'History',
      status: 'Completed',
      filepath: 'Location'
    }
  ]);

  constructor() { }

  public getAllNotes() {
    return this.notes.asObservable();
  }

public getExamForSubject(classroomcode: string, subject: string){
    // tslint:disable-next-line: max-line-length
    return this.getAllNotes().pipe(map(notes =>  notes.filter(note => note.classroomcode === classroomcode && note.subject === subject)));
  }
  public add(ID: string, name: string, classroomcode: string, subject: string, filepath: string){
    const newNote: Notes = {
      ID: ID,
      name: name,
      classroomcode: classroomcode,
      subject: subject,
      status: 'New',
      filepath: filepath
    };
    this.notes.pipe(take(1)).subscribe(cls => {
      this.notes.next(cls.concat(newNote));
    });
  }
}
