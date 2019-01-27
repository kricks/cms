import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contacts.model';

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
    // tslint:disable-next-line:no-input-rename
    @Input('contact') contacts: Contact[] = [
       new Contact('1', 'Bro. Jackson', 'jacksonk@byui.edu', '208-496-3771',
       'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
     , new Contact('2', 'Bro. Barzee', 'barzeer@byui.edu', '208-496-3768', 'src\assets\trex.jpg')
    ];

  constructor() { }

  ngOnInit() {
  }

}
