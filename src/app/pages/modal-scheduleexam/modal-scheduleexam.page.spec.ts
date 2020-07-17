import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalScheduleexamPage } from './modal-scheduleexam.page';

describe('ModalScheduleexamPage', () => {
  let component: ModalScheduleexamPage;
  let fixture: ComponentFixture<ModalScheduleexamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalScheduleexamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalScheduleexamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
