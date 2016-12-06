import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { DataService } from '../utils/data.service';

@Component({
  selector: 'new-contact-form',
  template: `
    <form [formGroup]="newContactForm">
      <input formControlName="firstName" placeholder="First Name">
      <input formControlName="lastName" placeholder="Last Name">
      <input formControlName="company" placeholder="Company">
      <input formControlName="phone" placeholder="Phone">
      <input formControlName="email" placeholder="Email">
      <button type="submit">Add new contact</button>
    </form>
    <h1>debug: {{newContactForm.value | json}}</h1>
  `,
  styles: [`
    * {
      font-family: Helvetica;
    }
    form {
      max-width: 500px;
      text-align: center;
      margin: 0 auto;
    }
    input {
      display: block;
      padding: 8px;
      margin: 5px;
      width: 100%;
    }
    button {
      padding: 10px;
      margin: 0 auto;
      width: 33%;
    }
  `]
})
export class NewContactFormComponent {
  newContactForm: FormGroup;
  
  constructor(private dataService: DataService, public fb: FormBuilder) {
    this.newContactForm = this.fb.group({
      firstName: '',
      lastName: '',
      company: '',
      phone: '',
      email: ''
    });
  }
}