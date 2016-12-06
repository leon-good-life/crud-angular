import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { ContactsGridComponent } from './contactsGrid/contactsGrid.component';
import { NewContactFormComponent } from './newContactForm/newContactForm.component';
import { DataService } from './utils/data.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactsGridComponent,
    NewContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
