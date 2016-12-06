import { Component, Input } from '@angular/core';
import { DataService } from '../utils/data.service';

@Component({
  selector: 'new-contact-form',
  template: `
    <form>
      <input placeholder="First Name">
      <input placeholder="Last Name">
      <input placeholder="Company">
      <input placeholder="Phone">
      <input placeholder="Email">
    </form>
  `,
  styles: [`
    * {
      font-family: Helvetica;
    }
    input {
      display: block;
    }
  `]
})
export class NewContactFormComponent {
  constructor(private dataService: DataService) {}
}