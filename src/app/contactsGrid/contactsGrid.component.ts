import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../utils/data.service';

@Component({
  selector: 'contacts-grid',
  template: `
    <h1>Contacts List</h1>
    <h2 *ngIf="dataService.data.length === 0">Contacts list is empty.</h2>
    <div>
      <button (click)="addNewContact()"
              class="create-new-contact">Create new contact</button>
    </div>
    <grid [data]="dataService.data"
          [hiddenColumns]="['id']"
          [orderByColumn]="'firstName'"
          [actions]="actions"></grid>
  `,
  styles: [`
    button.create-new-contact {
      padding: 5px;
      margin-bottom: 15px;
    }
    grid {
      margin: 0 auto;
      display: inline-block;
      border: 1px solid lightgray;
    }
  `]
})
export class ContactsGridComponent {

  constructor(private dataService: DataService, public router: Router) {}

  actions = [{
      name: 'Delete',
      event: (contact) => this.onDelete(contact.id)
    }, {
      name: 'Edit',
      event: (contact) => this.onEdit(contact)
    }
  ];

  onDelete(id) {
    this.dataService.deleteContact(id);
  }

  onEdit(contactObj) {
    this.router.navigate(['edit-contact'], { queryParams: contactObj });
  }

  addNewContact() {
    this.router.navigate(['add-new-contact']);
  }
}