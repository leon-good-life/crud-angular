import { Routes } from '@angular/router';
import { ContactsGridComponent } from './contactsGrid/contactsGrid.component';
import { NewContactFormComponent } from './newContactForm/newContactForm.component';
import { EditContactFormComponent } from './editContactForm/editContactForm.component';

export const routes:Routes = [
    { path:'', redirectTo:'contacts-list', pathMatch:'full' },
    { path:'contacts-list', component: ContactsGridComponent },
    { path:'add-new-contact',  component: NewContactFormComponent},
    { path:'edit-contact',  component: EditContactFormComponent}
];