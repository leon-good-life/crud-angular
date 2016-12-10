import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'contact-form',
  template: `
    <form (ngSubmit)="onSubmit($event)" [formGroup]="contactForm">
      <input type="hidden" formControlName="id">
      <input formControlName="firstName" placeholder="First Name">
      <input formControlName="lastName" placeholder="Last Name">
      <input formControlName="company" placeholder="Company">
      <input formControlName="phone" placeholder="Phone">
      <input formControlName="email" placeholder="Email">
      <button type="submit">Save</button>
      <button type="button" (click)="cancelEvent()">Cancel</button>
    </form>
  `,
  styles: [`
    form {
      max-width: 500px;
      text-align: center;
      margin: 0 auto;
      padding: 30px;
      border: 1px solid lightgray;
    }
    input {
      display: block;
      padding: 8px;
      margin-bottom: 15px;
      width: 100%;
      box-sizing: border-box;
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
  @Input() cancelEvent;
  contactForm: FormGroup;
  
  constructor(public fb: FormBuilder, private activatedRoute: ActivatedRoute) {
    this.contactForm = this.fb.group({
      id: String(Date.now()),
      firstName: '',
      lastName: '',
      company: '',
      phone: '',
      email: ''
    });
    this.activatedRoute.queryParams.forEach(contact => {
      if (Object.keys(contact).length !== 0) {
        this.contactForm = this.fb.group(contact);
      }
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.submitEvent(this.contactForm.value);
  }
}