import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssignmenthistoryPage } from './assignmenthistory.page';

describe('AssignmenthistoryPage', () => {
  let component: AssignmenthistoryPage;
  let fixture: ComponentFixture<AssignmenthistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmenthistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssignmenthistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
