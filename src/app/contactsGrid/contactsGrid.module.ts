import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContactsGridComponent } from './contactsGrid.component';
import { GridModule } from '../utils/grid/grid.module';
import { StoreService } from '../utils/redux/store.service';

@NgModule({
  imports: [
    BrowserModule,
    GridModule
  ],
  declarations: [
    ContactsGridComponent
  ],
  exports: [
    ContactsGridComponent
  ],
  providers: [
    StoreService
  ]
})
export class ContactsGridModule {}