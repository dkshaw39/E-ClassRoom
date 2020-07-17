import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MODALAddclassroomPage } from './modal-addclassroom.page';

describe('MODALAddclassroomPage', () => {
  let component: MODALAddclassroomPage;
  let fixture: ComponentFixture<MODALAddclassroomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MODALAddclassroomPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MODALAddclassroomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
