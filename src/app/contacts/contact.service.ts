import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { MOCKCONTACTS } from './MOCKCONTACTS';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Contact } from './contacts.model';
import { ContactsComponent } from './contacts.component';


@Injectable({
    providedIn: 'root'
})
export class ContactService {
    public contacts: Contact[] = [];
    contactSelectedEvent = new EventEmitter<Contact>();
    contactListChangedEvent = new Subject<Contact[]>();
    maxContactId: number;

    constructor(private http: HttpClient) {
        // this.contacts = MOCKCONTACTS;
        this.maxContactId = this.getMaxId();
        this.getContacts();
    }

    getContacts() {
        this.http.get('https://project-cms-6b40b.firebaseio.com/contacts.json')
        .subscribe(
            (contacts: Contact[]) => {
              this.contacts = contacts;
              this.contacts.sort((a, b) => (a['name'] < b['name']) ? 1 : (a['name'] > b['name']) ? -1 : 0);
              this.contactListChangedEvent.next(this.contacts.slice());
            }, (error: any) => {
              console.log('Cannot get contacts');
            }
          );
      }

    // not sure if this is right. step 8 pg. 3
    getContact(id: string): Contact {
        for (const contact of this.contacts) {
            if (contact.id === id) {
                return contact;
            }
        }
        return null;
    }

    getMaxId(): number {
        let maxId = 0;
        for (const contactList of this.contacts) {
            const currentId = (parseInt(contactList.id, 10));

            if (currentId > maxId) {
                maxId = currentId;
            }
        }
        return maxId;
    }

    addContact(newContact: Contact) {
        if (newContact === undefined || null) {
            return;
        }

        this.maxContactId++;
        newContact.id = String(this.maxContactId);

        this.contacts.push(newContact);
        // const contactListClone = this.contacts.slice();
        // this.contactListChangedEvent.next(contactListClone);
        this.storeContacts();
    }

    updateContact(originalContact: Contact, newContact: Contact) {
        if (originalContact || newContact === undefined || null) {
            return;
        }
        newContact.id = originalContact.id;
        const pos = this.contacts.indexOf(originalContact);

        if (pos < 0) {
            return;
        }
        this.contacts[pos] = newContact;
        // const contactListClone = this.contacts.slice();
        // this.contactListChangedEvent.next(contactListClone);
        this.storeContacts();
    }

    deleteContact(contact: Contact) {
        if (contact === undefined || null) {
            return;
        }

        const pos = this.contacts.indexOf(contact);

        if (pos < 0) {
            return;
        }

        this.contacts.splice(pos, 1);
        // const contactsListClone = this.contacts.slice();
        // this.contactListChangedEvent.next(contactsListClone);
        this.storeContacts();
    }

    storeContacts() {
        this.contacts = JSON.parse(JSON.stringify(this.contacts));
        const header = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.put('https://project-cms-6b40b.firebaseio.com/contacts.json', this.contacts, { headers: header})
          .subscribe(
            (contacts: Contact[]) => {
              this.contactListChangedEvent.next(this.contacts.slice());
            }
          );
      }
}
