import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoteshistoryPage } from './noteshistory.page';

describe('NoteshistoryPage', () => {
  let component: NoteshistoryPage;
  let fixture: ComponentFixture<NoteshistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteshistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoteshistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
