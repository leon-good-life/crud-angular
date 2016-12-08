import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'contact-form',
  template: `
    <form (ngSubmit)="onSubmit($event)" [formGroup]="contactForm">
      <input formControlName="firstName" placeholder="First Name">
      <input formControlName="lastName" placeholder="Last Name">
      <input formControlName="company" placeholder="Company">
      <input formControlName="phone" placeholder="Phone">
      <input formControlName="email" placeholder="Email">
      <button type="submit">{{submitBtnText}}</button>
    </form>
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
export class ContactFormComponent {
  @Input() submitEvent;
  @Input() submitBtnText;
  contactForm: FormGroup;
  
  constructor(public fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: '',
      lastName: '',
      company: '',
      phone: '',
      email: ''
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.submitEvent(this.contactForm.value);
  }
}