import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateclassroomPage } from './updateclassroom.page';

describe('UpdateclassroomPage', () => {
  let component: UpdateclassroomPage;
  let fixture: ComponentFixture<UpdateclassroomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateclassroomPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateclassroomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
