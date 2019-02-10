import { Message } from './message.model';
import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from './messages.service';

@Component({
  selector: 'cms-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  @Input() message: Message;

  constructor() { }

  ngOnInit() {
  }

}
