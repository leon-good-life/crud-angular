import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { ContactFormModule } from './contactForm/contactForm.module';
import { ContactsGridModule } from './contactsGrid/contactsGrid.module';
import { routes } from './app.routes';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ContactFormModule,
    ContactsGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
