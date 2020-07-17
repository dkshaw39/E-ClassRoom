import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalCreateassignmentPage } from './modal-createassignment.page';

describe('ModalCreateassignmentPage', () => {
  let component: ModalCreateassignmentPage;
  let fixture: ComponentFixture<ModalCreateassignmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCreateassignmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCreateassignmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
