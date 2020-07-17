import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder, Validators
} from '@angular/forms';

@Component({
  selector: 'app-form-validator',
  templateUrl: './form-validator.page.html',
  styleUrls: ['./form-validator.page.scss'],
})
export class FormValidatorPage implements OnInit {

  constructor(private formBuilder: FormBuilder) {}

  get name() {
    return this.registrationForm.get('name');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get phone() {
    return this.registrationForm.get('phone');
  }

  get street() {
    return this.registrationForm.get('address.street');
  }

  get city() {
    return this.registrationForm.get('address.city');
  }

  get state() {
    return this.registrationForm.get('address.state');
  }

  get zip() {
    return this.registrationForm.get('address.zip');
  }
public errorMessage = {
  name: [
    {type: 'required', message: 'Name is required'},
    {type: 'maxlength', message: 'Name cannot be longer than 100 characters'},
  ],
  email: [
    {type: 'required', message: 'Email is required'},
    {type: 'pattern', message: 'Please enter a valid email address'},
  ],
  phone: [
    {type: 'required', message: 'Phone is required'},
    {type: 'pattern', message: 'Please enter a valid phone number'},
  ],
  street: [
    {type: 'required', message: 'Street is required'},
    {type: 'maxlength', message: 'Street cannot be longer than 100 characters'},
  ],
  city: [
    {type: 'required', message: 'City is required'},
    {type: 'maxlength', message: 'City cannot be longer than 100 characters'},
  ],
  state: [
    {type: 'required', message: 'State is required'},
    {type: 'maxlength', message: 'State cannot be longer than 100 characters'},
  ],
  zip: [
    {type: 'required', message: 'Zip is required'},
    {type: 'pattern', message: 'Please enter a valid ZIP'},
  ],
};
  registrationForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(100)]],
    email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    address: this.formBuilder.group({
      street: ['', [Validators.required, Validators.maxLength(100)]],
      city: ['', [Validators.required, Validators.maxLength(100)]],
      state: ['', [Validators.required, Validators.maxLength(100)]],
      zip: ['', [Validators.required, Validators.pattern('^[1-9][0-9]{5}$')]]
    })
  });

  ngOnInit() {}

  onSubmit() {
    console.log(this.registrationForm.value);
  }
}
