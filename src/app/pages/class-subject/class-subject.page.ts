import { SharedSubjectDataService } from './../../services/shared-subject-data.service';
import { ClassRoomService } from './../../services/classroom.service';
import { Class } from './../../models/class.model';
import { ExamhistoryPage } from './../examhistory/examhistory.page';
import { NoteshistoryPage } from './../noteshistory/noteshistory.page';
import { AssignmenthistoryPage } from './../assignmenthistory/assignmenthistory.page';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-class-subject',
  templateUrl: './class-subject.page.html',
  styleUrls: ['./class-subject.page.scss'],
})
export class ClassSubjectPage implements OnInit {

  assignmenthistory = AssignmenthistoryPage;
  noteshistory = NoteshistoryPage;
  examhistory = ExamhistoryPage;

  cls: Class;
  sub: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
              private classroomService: ClassRoomService, private sharedSubjectData: SharedSubjectDataService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      // is no param then redirect
      if (!params.classroomcode || !params.subject) {
        this.router.navigate(['']);
      }else{
        // getting the subject from param
        this.sub = params.subject;
        // getting the class from ClassServer by passing params 'classroomcode'
        this.classroomService.getClass(params.classroomcode).subscribe( cls => {
          this.cls = cls;
        });
        console.log(params.classroomcode);
        console.log(params.subject);
        console.log(this.cls);
      }
      this.sharedSubjectData.setData(this.cls.Id, this.sub);
    });
  }

}
