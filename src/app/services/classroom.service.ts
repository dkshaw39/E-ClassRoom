import { LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Teacher } from './../models/teacher.model';
import { Student } from './../models/student.mode';
import { Class } from './../models/class.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ClassRoomService {

  public roleType = 'Teacher';

  public classes: BehaviorSubject<Class[]> = new BehaviorSubject<Class[]>([]);

  constructor(private http: HttpClient, private loadingController: LoadingController) {
  }

  public loadClass() {
    return this.http.get('https://api.app4school.co.in:8888/api/ClassRoom/GetClassRoomList?roleType=' + this.roleType)
    .pipe(take(1), tap(res => {
    const loading = this.loadingController.create({
      message: 'Loading',
      spinner: 'lines-small',
    });
    loading.then((spin) => spin.present());
    const data = JSON.stringify(res);
    const classrooms: Class[] = [];
    JSON.parse(data).forEach(item => {
      const subjectLists = [];
      if (item.Id !== 1003) {
        this.http.get('https://api.app4school.co.in:8888/api/ClassRoom/GetSubjectList?classRoomId=' + item.Id).subscribe( cls => {
          JSON.parse(JSON.stringify(cls)).forEach(element => {
            subjectLists.push(element.Value);
          });
        });
      }
      classrooms.push(
          new Class('' + item.Id, item.Name, item.Section,
              item.Institute, item.TotalStudents, item.TotalTeachers, item.TotalSubjects, subjectLists)
          );
      this.classes = new BehaviorSubject<Class[]>(classrooms);
      });
    loading.then((spin) => spin.dismiss());
    }));
  }

  getAllClass(){
    return this.classes.asObservable();
  }

public getClass(clscode: string){
  console.log(this.classes.value);
  return this.classes.pipe(take(1), map( clses => {
      return clses.find(c => c.Id === clscode);
    }));
    // return this.classes.filter(cls => cls.classroomCode === clscode);
  }

  public add(clscode: string, clsname: string, sec: string, studentList?: Student[], teacherList?: Teacher[], subjectList?: string[]){
    const newcls: Class = {
      Id: clscode,
      Name: clsname,
      Section: sec,
      Institute: 'ABC',
      TotalStudents: 0,
      TotalTeachers: 0,
      TotalSubjects: 0
    };
    this.classes.pipe(take(1)).subscribe(cls => {
      this.classes.next(cls.concat(newcls));
    });
    console.log(this.classes.value);
    
  }
}
