import { ContactService } from './../contact.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Contact } from '../contacts.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'cms-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {
  contact: Contact = null;
  groupContacts: Contact[] = [];
  editMode = false;
  hasGroup = false;
  invalidGroupContact = false;

  constructor(private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        const id = params.id;

        if (params.id === undefined || null) {
          this.editMode = false;
          return;
        }

        const originalContact = this.contactService.getContact(id);

        if (originalContact === undefined || null) {
          return;
        }
        this.editMode = true;
        this.contact = JSON.parse(JSON.stringify(this.contact));

        if (this.groupContacts) {
          this.groupContacts = JSON.parse(JSON.stringify(this.groupContacts));
        }
        // const contactListClone = this..slice();
      }
    );
  }

  onSubmit(form: NgForm) {
    const values = form.value;

    const newContact = new Contact(values.id, values.name, values.email, values.phone,
      values.imageUrl, values.group);
    if (this.editMode = true) {
      // this.contactService.updateContact(this.groupContacts, newContact);
    } else {
      this.contactService.addContact(newContact);
    }

    this.router.navigate(['/contacts']);
  }

  isInvalidContact(newContact: Contact) {
    if (!newContact) {
      return true;
    }
    if (newContact.id === this.contact.id) {
      return true;
    }

    for (let i = 0; i < this.groupContacts.length; i++) {
      if (newContact.id === this.groupContacts[i].id) {
        return true;
      }
    }
    return false;
  }

  addToGroup($event: any) {
    const selectedContact: Contact = $event.dragData;
    this.invalidGroupContact = this.isInvalidContact(selectedContact);
    if (this.invalidGroupContact) {
      return;
    }
    this.groupContacts.push(selectedContact);
    this.invalidGroupContact = false;

  }

  onRemoveItem(idx: number) {
    if (idx < 0 || idx >= this.groupContacts.length) {
      return;

      this.groupContacts.splice(idx, 1);
      this.invalidGroupContact = false;
    }
  }

}
