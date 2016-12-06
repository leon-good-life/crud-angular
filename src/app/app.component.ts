import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a [routerLink]="['contacts-grid']">Contacts grid</a>
      <a [routerLink]="['new-contact-form']">New contact form</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    nav {
      text-align: center;
      padding: 26px;
      font-family: Helvetica;
      font-size: large;
    }
  `]
})
export class AppComponent {
}