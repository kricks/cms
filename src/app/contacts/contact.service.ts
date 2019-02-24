import { Contact } from './contacts.model';
import { MOCKCONTACTS } from './MOCKCONTACTS';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ContactService {
    public contacts: Contact[] = [];
    contactSelectedEvent = new EventEmitter<Contact>();
    contactListChangedEvent = new Subject<Contact[]>();
    maxContactId: number;

    constructor() {
        this.contacts = MOCKCONTACTS;
        this.maxContactId = this.getMaxId();
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

    getMaxId(): number {
        let maxId = 0;
        for (const contactList of this.contacts) {
            const currentId = +contactList.id;

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
        newContact.id = this.maxContactId;

        newContact.push(...this.contacts);
        const documentListClone = this.documents.slice();

        this.documentListChangedEvent.next(documentListClone);
    }

    updateContact(originalContact: Contact, newContact: Contact) {
        if (originalContact || newContact === undefined || null) {
            return;
        }

        const pos = this.contacts.indexOf(originalContact);

        if (pos < 0) {
            return;
        }

        newContact.id = originalContact.id;
        this.contacts[pos] = newContact;
        const contactListClone = this.contacts.slice();
        this.contactListChangedEvent.next(contactListClone);
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
        const contactsListClone = this.contacts.slice();
        this.contactListChangedEvent.next(contactsListClone);
    }
}
