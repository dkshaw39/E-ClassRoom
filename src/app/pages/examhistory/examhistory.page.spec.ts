import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExamhistoryPage } from './examhistory.page';

describe('ExamhistoryPage', () => {
  let component: ExamhistoryPage;
  let fixture: ComponentFixture<ExamhistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamhistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExamhistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
