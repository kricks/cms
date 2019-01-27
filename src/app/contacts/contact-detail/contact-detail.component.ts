import { Component, OnInit } from '@angular/core';
import { Contact } from '../contacts.model';

@Component({
  selector: 'cms-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contacts: Contact;

  constructor() { }

  ngOnInit() {
  }

}
