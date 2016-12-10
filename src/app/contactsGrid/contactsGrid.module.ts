import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContactsGridComponent } from './contactsGrid.component';
import { GridModule } from '../utils/grid/grid.module';
import { DataService } from '../utils/data.service';

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
    DataService
  ]
})
export class ContactsGridModule {}