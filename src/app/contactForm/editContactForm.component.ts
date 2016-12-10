import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../utils/redux/store.service';

@Component({
  selector: 'edit-contact-form',
  template: `
    <h1>Edit Contact</h1>
    <contact-form [submitEvent]="submitEvent" [cancelEvent]="cancelEvent"></contact-form>
  `
})
export class EditContactFormComponent {
  submitBtnText = 'Update contact';
  
  constructor(public store: StoreService, public router: Router) {}

  submitEvent = (contact) => {
    this.store.dispatch(this.store.ACTION_CREATORS.updateContact(contact));
    this.router.navigate(['contacts-list']);
  }

  cancelEvent = () => {
    this.router.navigate(['contacts-list']);
  }
}