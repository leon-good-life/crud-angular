import { Component } from '@angular/core';
import { DataService } from './utils/data.service';

@Component({
  selector: 'app-root',
  template: `
    <contacts-grid [items]="dataService.data"></contacts-grid>
  `
})
export class AppComponent {
  constructor(private dataService: DataService) {}
}