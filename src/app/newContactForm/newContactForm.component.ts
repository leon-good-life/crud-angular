import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { DataService } from '../utils/data.service';

@Component({
  selector: 'new-contact-form',
  template: `
    <contact-form [submitEvent]="submitEvent" [submitBtnText]="submitBtnText"></contact-form>
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
  submitBtnText = 'Add new contact';
  
  constructor(public dataService: DataService, public router: Router) {}

  submitEvent = (val) => {
    this.dataService.addNewContact(val);
    this.router.navigate(['contacts-grid']);
  }
}