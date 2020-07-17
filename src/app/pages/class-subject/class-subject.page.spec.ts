import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClassSubjectPage } from './class-subject.page';

describe('ClassSubjectPage', () => {
  let component: ClassSubjectPage;
  let fixture: ComponentFixture<ClassSubjectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassSubjectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClassSubjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
