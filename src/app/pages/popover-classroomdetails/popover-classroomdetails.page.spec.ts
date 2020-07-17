import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { POPOVERClassroomdetailsPage } from './popover-classroomdetails.page';

describe('POPOVERClassroomdetailsPage', () => {
  let component: POPOVERClassroomdetailsPage;
  let fixture: ComponentFixture<POPOVERClassroomdetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ POPOVERClassroomdetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(POPOVERClassroomdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
