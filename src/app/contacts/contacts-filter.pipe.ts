import { Contact } from './contacts.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contactsFilter'
})
export class ContactsFilterPipe implements PipeTransform {

  transform(contacts: Contact[], term: any) {
    let filteredArray: Contact[] = [];

    if (term && term.length > 0) {
      filteredArray = contacts.filter(
        (contact: Contact) => contact.name.toLowerCase()
        .includes(term.toLowerCase())
      );
    }

    if (filteredArray.length < 1) {
      return contacts;
    }

    return filteredArray;
  }

}
