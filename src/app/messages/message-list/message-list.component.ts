import { Message } from './../message.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  messages: Message[] = [
    new Message(
      '1'
      , 'subject 1'
      , 'Hello World! 1'
      , 'sender 1'
    )
    ,
    new Message(
      '2'
      , 'subject 2'
      , 'Hello World! 2'
      , 'sender 2'
    )
    ,
    new Message(
      '3'
      , 'subject 3'
      , 'Hello World! 3'
      , 'sender 3'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

  onAddMessage(message: Message) {
    this.messages.push(message);
  }

}
