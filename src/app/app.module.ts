import { AppRoutingModule } from './app-routing.module';
import { MessageService } from './messages/messages.service';
import { DropdownDirective } from './shared/dropdown.directive';
import { DocumentListComponent } from './documents/document-list/document-list.component';
import { DocumentItemComponent } from './documents/document-list/document-item/document-item.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { ContactItemComponent } from './contacts/contact-list/contact-item/contact-item.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentDetailComponent } from './documents/document-detail/document-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageItemComponent } from './messages/message-list/message-item/message-item.component';
import { MessageEditComponent } from './messages/message-list/message-edit/message-edit.component';
import { MessageListComponent } from './messages/message-list/message-list.component';
import { ContactService } from './contacts/contact.service';
import { DocumentService } from './documents/documents.service';
import { DocumentViewComponent } from './documents/document-view/document-view.component';
import { DocumentEditComponent } from './documents/document-edit/document-edit.component';
import { WindRefComponent } from './wind-ref/wind-ref.component';
import { WindRefService } from './wind-ref/wind-ref.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsComponent,
    ContactListComponent,
    ContactDetailComponent,
    ContactItemComponent,
    DocumentsComponent,
    DocumentListComponent,
    DocumentItemComponent,
    DocumentDetailComponent,
    MessagesComponent,
    MessageItemComponent,
    MessageEditComponent,
    MessageListComponent,
    DropdownDirective,
    DocumentViewComponent,
    DocumentEditComponent,
    WindRefComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MessageService, ContactService, DocumentService, WindRefService],
  bootstrap: [AppComponent]
})
export class AppModule { }
