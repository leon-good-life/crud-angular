import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import { GridModule } from './utils/grid/grid.module';
import { ContactFormModule } from './contactForm/contactForm.module';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { ContactsGridComponent } from './contactsGrid/contactsGrid.component';
import { DataService } from './utils/data.service';


@NgModule({
  declarations: [
    AppComponent,
    ContactsGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ContactFormModule,
    GridModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
