import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginSimplePage } from './login-simple.page';

describe('LoginSimplePage', () => {
  let component: LoginSimplePage;
  let fixture: ComponentFixture<LoginSimplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSimplePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginSimplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
