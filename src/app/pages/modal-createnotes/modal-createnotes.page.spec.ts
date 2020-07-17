import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalCreatenotesPage } from './modal-createnotes.page';

describe('ModalCreatenotesPage', () => {
  let component: ModalCreatenotesPage;
  let fixture: ComponentFixture<ModalCreatenotesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCreatenotesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCreatenotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
