import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './ContactForm.component';
import { NewContactFormComponent } from './newContactForm.component';
import { EditContactFormComponent } from './editContactForm.component';
import { DataService } from '../utils/data.service';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    ContactFormComponent,
    NewContactFormComponent,
    EditContactFormComponent
  ],
  exports: [
    NewContactFormComponent,
    EditContactFormComponent
  ],
  providers: [
    DataService
  ]
})
export class ContactFormModule {}