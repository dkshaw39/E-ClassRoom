import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AngularFireLoginPage } from './angular-fire-login.page';

describe('AngularFireLoginPage', () => {
  let component: AngularFireLoginPage;
  let fixture: ComponentFixture<AngularFireLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularFireLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AngularFireLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
