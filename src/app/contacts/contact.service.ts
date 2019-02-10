import { Contact } from './contacts.model';
import { MOCKCONTACTS } from './MOCKCONTACTS';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class ContactService {
    public contacts: Contact[] = [];
    contactSelectedEvent = new EventEmitter<Contact>();

    constructor() {
        this.contacts = MOCKCONTACTS;
    }

    getContacts() {
        return this.contacts.slice();
    }

    // not sure if this is right. step 8 pg. 3
    getContact(id: string): Contact {
        for (const contact of this.contacts) {
            if (contact.id = id) {
                return contact;
            }
        }
        return null;
    }
}
