import { Subscription } from 'rxjs';
import { ContactService } from './../contact.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Contact } from '../contacts.model';

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnDestroy {
  contacts: Contact[] = [];
  Subscription: Subscription;
  term: String;

  constructor(private contactService2: ContactService) {

  }

  ngOnInit() {
    this.contactService2.getContacts();
    this.Subscription = this.contactService2.contactListChangedEvent
    .subscribe(
      (contactList: Contact[]) => {
        this.contacts = contactList;
      }
    );
  }

  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }

  onKeyPress(value: string) {
    this.term = value;
  }

}
