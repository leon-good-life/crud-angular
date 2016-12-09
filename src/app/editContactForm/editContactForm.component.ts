import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { DataService } from '../utils/data.service';

@Component({
  selector: 'edit-contact-form',
  template: `
    <h1>Edit Contact</h1>
    <contact-form [submitEvent]="submitEvent" [cancelEvent]="cancelEvent"></contact-form>
  `
})
export class EditContactFormComponent {
  submitBtnText = 'Update contact';
  
  constructor(public dataService: DataService, public router: Router) {}

  submitEvent = (contact) => {
    this.dataService.updateContact(contact);
    this.router.navigate(['contacts-list']);
  }

  cancelEvent = () => {
    this.router.navigate(['contacts-list']);
  }
}