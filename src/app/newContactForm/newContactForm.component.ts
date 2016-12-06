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
      <button type="submit">Add new contact</button>
    </form>
  `,
  styles: [`
    * {
      font-family: Helvetica;
    }
    form {
      max-width: 500px;
      text-align: center;
      margin: 0 auto;
    }
    input {
      display: block;
      padding: 8px;
      margin: 5px;
      width: 100%;
    }
    button {
      padding: 10px;
      margin: 0 auto;
      width: 33%;
    }
  `]
})
export class NewContactFormComponent {
  constructor(private dataService: DataService) {}
}