import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../utils/data.service';

@Component({
  selector: 'contacts-grid',
  template: `
    <h1>Contacts List</h1>
    <table>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Company</th>
        <th>Phone</th>
        <th>Email</th>
        <th><button (click)="addNewContact()">Add New Contact</button></th>
      </tr>
      <tr *ngFor="let contact of dataService.data">
        <td>{{contact.firstName}}</td>
        <td>{{contact.lastName}}</td>
        <td>{{contact.company}}</td>
        <td>{{contact.phone}}</td>
        <td>{{contact.email}}</td>
        <td>
          <button (click)="onDelete(contact.id)">Delete</button>
          <button (click)="onEdit(contact)">Edit</button>
        </td>
      </tr>
    </table>  
  `,
  styles: [`
    table {
      margin: 0 auto;
      border-collapse: collapse;
      border: 1px solid lightgray;
    }
    th, td {
      text-align: left;
      padding: 20px;
    }
    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
    button {
      padding: 5px;
    }
  `]
})
export class ContactsGridComponent {
  constructor(private dataService: DataService, public router: Router) {}

  onDelete(id) {
    this.dataService.deleteContact(id);
  }

  onEdit(contactObj) {
    this.router.navigate(['edit-contact-form'], { queryParams: contactObj });
  }

  addNewContact() {
    this.router.navigate(['new-contact-form']);
  }
}