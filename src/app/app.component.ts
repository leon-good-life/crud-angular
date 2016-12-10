import { Component } from '@angular/core';
import { StoreService } from './utils/redux/store.service';
import { dataArr } from './utils/dataArr';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  constructor(private store: StoreService) {
    for (let contactObj of dataArr) {
      this.store.dispatch(
        this.store.ACTION_CREATORS.addContact(contactObj));
    }
  }
}