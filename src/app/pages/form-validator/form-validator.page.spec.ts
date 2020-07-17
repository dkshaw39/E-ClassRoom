import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormValidatorPage } from './form-validator.page';

describe('FormValidatorPage', () => {
  let component: FormValidatorPage;
  let fixture: ComponentFixture<FormValidatorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormValidatorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormValidatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
