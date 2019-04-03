import { Message } from './../../message.model';
import { ContactService } from './../../../contacts/contact.service';
import { Component, OnInit, Input } from '@angular/core';
import { Contact } from 'src/app/contacts/contacts.model';

@Component({
  selector: 'cms-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {
  @Input() message: Message;
  messageSender = '';
  canEdit = false;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    const contact: Contact = this.contactService.getContact(this.message.sender);
    this.messageSender = contact.name ? contact.name : 'Contact Not Loaded';
  }

}
