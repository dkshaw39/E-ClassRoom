import { Class } from './../../models/class.model';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ClassRoomService } from 'src/app/services/classroom.service';
import { ActionSheetController, ModalController, LoadingController, IonInfiniteScroll } from '@ionic/angular';
import { MODALAddclassroomPage } from '../modal-addclassroom/modal-addclassroom.page';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classrooms',
  templateUrl: './classrooms.page.html',
  styleUrls: ['./classrooms.page.scss'],
})
export class ClassroomsPage implements OnInit, OnDestroy {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  classes: Class[] = [];
  institutes: string[] = [];
  private clsSubscription: Subscription;

  constructor(
    private classroomService: ClassRoomService,
    private actionctrl: ActionSheetController,
    private modalController: ModalController,
    private router: Router,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.classroomService.loadClass().subscribe(res => {
      this.clsSubscription = this.classroomService
        .getAllClass()
        .subscribe((clses) => {
          this.classes = clses;
          this.classes.forEach(cls => {
            if (!this.institutes.find(element => element === cls.Institute)) {
              this.institutes.push(cls.Institute);
            }
          });
        });
    });
  }

  ngOnDestroy() {
    this.clsSubscription.unsubscribe();
  }

  // Infinite Scroll
  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (true) {
        event.target.disabled = true;
        this.infiniteScroll.disabled = true;
        return;
      }
    }, 500);
  }

  async createAlertAction(btns) {
    await this.actionctrl
      .create({
        header: 'Actions',
        buttons: btns,
      })
      .then((res) => res.present());
  }
  async addClassroom() {
    const modal = await this.modalController.create({
      component: MODALAddclassroomPage,
      componentProps: this.classes,
      // cssClass: 'float-modal',
    });
    modal.present();
  }

  onEdit(classroomcode: string) {
    const btns = [
      {
        text: 'Add Student',
        icon: 'add-circle-outline',
        handler: () => {
          this.router.navigate(['updateclassroom'], {
            queryParams: { classroomcode },
          });
          console.log('Add Student');
        },
      },
      {
        text: 'Add Teacher',
        icon: 'add-circle-outline',
        handler: () => {
          this.router.navigate(['updateclassroom'], {
            queryParams: { classroomcode },
          });
          console.log('Add Teacher');
        },
      },
      {
        text: 'Add Subject',
        icon: 'add-circle-outline',
        handler: () => {
          this.router.navigate(['updateclassroom'], {
            queryParams: { classroomcode },
          });
          console.log('Add Subject');
        },
      },
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
      },
    ];
    this.createAlertAction(btns);
  }

  clickOnDetail() {
    console.log('Click to move');
  }

  clickOnSubject(classroomcode: string, subjects: string[]) {
    const btns = [];
    subjects.forEach((subject) => {
      console.log(subject);
      const btn = {
        text: subject,
        icon: 'book-outline',
        handler: () => {
          this.router.navigate(['/', 'class_subject'], {
            queryParams: { classroomcode, subject },
          });
          console.log(subject);
        },
      };
      btns.push(btn);
    });
    const btn = {
      text: 'Cancel',
      icon: 'close',
      role: 'cancel',
    };
    btns.push(btn);
    this.createAlertAction(btns);
  }
}
