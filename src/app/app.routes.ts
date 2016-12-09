import { Routes } from '@angular/router';
import { ContactsGridComponent } from './contactsGrid/contactsGrid.component';
import { NewContactFormComponent } from './newContactForm/newContactForm.component';
import { EditContactFormComponent } from './editContactForm/editContactForm.component';

export const routes:Routes = [
    { path:'', redirectTo:'contacts-grid', pathMatch:'full' },
    { path:'contacts-grid', component: ContactsGridComponent },
    { path:'new-contact-form',  component: NewContactFormComponent},
    { path:'edit-contact-form',  component: EditContactFormComponent}
];