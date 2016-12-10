import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../utils/data.service';

@Component({
  selector: 'new-contact-form',
  template: `
    <h1>Add New Contact</h1>
    <contact-form [submitEvent]="submitEvent" [cancelEvent]="cancelEvent"></contact-form>
  `
})
export class NewContactFormComponent {
  submitBtnText = 'Add new contact';
  
  constructor(public dataService: DataService, public router: Router) {}

  submitEvent = (contact) => {
    this.dataService.addNewContact(contact);
    this.router.navigate(['contacts-list']);
  }

  cancelEvent = () => {
    this.router.navigate(['contacts-list']);
  }
}