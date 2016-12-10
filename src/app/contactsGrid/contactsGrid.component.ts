import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../utils/data.service';

@Component({
  selector: 'contacts-grid',
  template: `
    <h1>Contacts List</h1>
    <div *ngIf="dataService.data.length === 0">
      <h2>Contacts list is empty.</h2>
      <button (click)="addNewContact()">Create new contact</button>
    </div>
    <table *ngIf="dataService.data.length > 0">
      <tr>
        <th (click)="columnClick('firstName')"
            [class]="whichClass('firstName')">First Name</th>
        <th (click)="columnClick('lastName')"
            [class]="whichClass('lastName')">Last Name</th>
        <th (click)="columnClick('company')"
            [class]="whichClass('company')">Company</th>
        <th (click)="columnClick('phone')"
            [class]="whichClass('phone')">Phone</th>
        <th (click)="columnClick('email')"
            [class]="whichClass('email')">Email</th>
        <th><button (click)="addNewContact()">Add New Contact</button></th>
      </tr>
      <tr *ngFor="let contact of dataService.data | orderby:orderByColumn:direction">
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
    th.desc:before{
      content: '▼ ';
      font-size: small;
    }
    th.asc:before{
      content: '▲ ';
      font-size: small;
    }
    th, td {
      text-align: left;
      padding: 20px;
    }
    th {
      cursor: pointer;
      user-select: none;
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
  orderByColumn = 'firstName';
  direction = 'desc';

  constructor(private dataService: DataService, public router: Router) {}

  onDelete(id) {
    this.dataService.deleteContact(id);
  }

  onEdit(contactObj) {
    this.router.navigate(['edit-contact'], { queryParams: contactObj });
  }

  addNewContact() {
    this.router.navigate(['add-new-contact']);
  }

  columnClick(columnName) {
    if (this.orderByColumn === columnName) {
      if (this.direction === 'desc') {
        this.direction = 'asc';
      } else {
        this.direction = 'desc';
      }
    } else {
      this.direction = 'desc';
      this.orderByColumn = columnName;
    }
  }

  whichClass(columnName) {
    if (this.orderByColumn === columnName) {
      return this.direction;
    }
    return '';
  }

}