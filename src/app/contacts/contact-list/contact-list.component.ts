import { ContactService } from './../contact.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../contacts.model';

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService2: ContactService) {
    this.contacts = this.contactService2.getContacts();
  }

  ngOnInit() {
  }

  onSelected(contact: Contact) {
    this.contactService2.contactSelectedEvent.emit(contact);
  }

}
