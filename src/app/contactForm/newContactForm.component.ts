import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../utils/redux/store.service';

@Component({
  selector: 'new-contact-form',
  template: `
    <h1>Add New Contact</h1>
    <contact-form [submitEvent]="submitEvent" [cancelEvent]="cancelEvent"></contact-form>
  `
})
export class NewContactFormComponent {
  submitBtnText = 'Add new contact';
  
  constructor(public store: StoreService, public router: Router) {}

  submitEvent = (contact) => {
    this.store.dispatch(this.store.ACTION_CREATORS.addContact(contact));
    this.router.navigate(['contacts-list']);
  }

  cancelEvent = () => {
    this.router.navigate(['contacts-list']);
  }
}