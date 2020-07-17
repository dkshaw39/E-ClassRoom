import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClassroomsPage } from './classrooms.page';

describe('ClassroomsPage', () => {
  let component: ClassroomsPage;
  let fixture: ComponentFixture<ClassroomsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassroomsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClassroomsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
