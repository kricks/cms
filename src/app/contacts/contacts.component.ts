import { ContactService } from './contact.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from './contacts.model';

@Component({
  selector: 'cms-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  selectedContact: Contact;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.contactSelectedEvent.subscribe(
      (contact: Contact) => {
        this.selectedContact = contact;
      }
    );
  }

}
