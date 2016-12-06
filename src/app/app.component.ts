import { Component } from '@angular/core';
import { DataService } from './utils/data.service';

@Component({
  selector: 'app-root',
  template: `
    <grid [items]="dataService.data"></grid>
  `
})
export class AppComponent {
  constructor(private dataService: DataService) {}
}