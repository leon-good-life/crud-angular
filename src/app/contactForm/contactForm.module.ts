import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './ContactForm.component';
import { NewContactFormComponent } from './newContactForm.component';
import { EditContactFormComponent } from './editContactForm.component';
import { StoreService } from '../utils/redux/store.service';

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
    StoreService
  ]
})
export class ContactFormModule {}