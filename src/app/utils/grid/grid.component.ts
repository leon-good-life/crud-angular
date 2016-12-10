import { Component, Input } from '@angular/core';

@Component({
  selector: 'grid',
  template: `
    <table *ngIf="data.length > 0">
      <tr>
        <th *ngFor="let columnName of data[0] | columns:hiddenColumns"
          (click)="columnClick(columnName)"
          [class]="whichClass(columnName)">{{columnName | splitCamelCase}}</th>
        <th *ngIf="actions.length > 0" class="actions">Actions</th>
      </tr>
      <tr *ngFor="let entry of data | orderBy:orderByColumn:direction">
        <td *ngFor="let columnName of entry | columns:hiddenColumns">{{entry[columnName]}}</td>
        <td *ngIf="actions.length > 0">
          <button *ngFor="let action of actions"
                  (click)="action.event(entry)">{{action.name}}</button>
        </td>
      </tr>
    </table>
  `,
  styles: [`
    table {
      border-collapse: collapse;
    }
    th.desc:before{
      content: '▼ ';
      font-size: small;
    }
    th.asc:before{
      content: '▲ ';
      font-size: small;
    }
    th {
      cursor: pointer;
      user-select: none;
    }
    th.actions {
      cursor: default;
    }

    th, td {
      text-align: left;
      padding: 20px;
    }
    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
    button {
      margin-right: 5px;
      padding: 5px;
    }
  `]
})
export class GridComponent {
  @Input() data: Array<any>;
  @Input() hiddenColumns: Array<string>;
  @Input() orderByColumn: string;
  @Input() actions: Array<any>;
  direction = 'desc';

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