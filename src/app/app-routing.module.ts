import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { ContactEditComponent } from './contacts/contact-edit/contact-edit.component';
import { DocumentDetailComponent } from './documents/document-detail/document-detail.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MessagesComponent } from './messages/messages.component';
import { Routes, RouterModule } from '@angular/router';
import { DocumentsComponent } from './documents/documents.component';
import { NgModule } from '@angular/core';
import { DocumentEditComponent } from './documents/document-edit/document-edit.component';

const app_routes: Routes = [
    {path: '', redirectTo: '/documents', pathMatch: 'full'},
    {path: 'documents', component: DocumentsComponent, children: [
        {path: 'new', component: DocumentEditComponent},
        {path: ':id', component: DocumentDetailComponent},
        {path: ':id/:edit', component: DocumentEditComponent}
    ]},
    {path: 'messages', component: MessagesComponent},
    {path: 'contact', component: ContactsComponent, children: [
        {path: 'new', component: ContactEditComponent},
        {path: ':id', component: ContactDetailComponent},
        {path: ':id/:edit', component: DocumentEditComponent}
    ]},
];

@NgModule({
    imports: [RouterModule.forRoot(app_routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule  {

}
