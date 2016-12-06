import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'grid',
  template: `
    <table>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Company</th>
        <th>Phone</th>
        <th>Email</th>
      </tr>
      <tr *ngFor="let item of items">
        <td>{{item.firstName}}</td>
        <td>{{item.lastName}}</td>
        <td>{{item.company}}</td>
        <td>{{item.phone}}</td>
        <td>{{item.email}}</td>
      </tr>
    </table>  
  `,
  styles: [`
    * {
      font-family: Helvetica;
    } 
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
  `]
})
export class GridComponent {
  @Input() items;

  constructor () {
  }
  
}