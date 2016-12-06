import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { DataService } from '../utils/data.service';

@Component({
  selector: 'new-contact-form',
  template: `
    <form (ngSubmit)="onSubmit()" [formGroup]="newContactForm">
      <input formControlName="firstName" placeholder="First Name">
      <input formControlName="lastName" placeholder="Last Name">
      <input formControlName="company" placeholder="Company">
      <input formControlName="phone" placeholder="Phone">
      <input formControlName="email" placeholder="Email">
      <button type="submit">Add new contact</button>
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
export class NewContactFormComponent {
  newContactForm: FormGroup;
  
  constructor(private dataService: DataService, public fb: FormBuilder, public router: Router) {
    this.newContactForm = this.fb.group({
      firstName: '',
      lastName: '',
      company: '',
      phone: '',
      email: ''
    });
  }

  onSubmit() {
    this.dataService.addNewContact(this.newContactForm.value);
    this.router.navigate(['contacts-grid']);
  }
}