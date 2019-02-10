import { MessageService } from './../messages.service';
import { Message } from './../message.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  @Output() messageWasAdded = new EventEmitter<Message>();
  messages: Message[] = [];

  constructor(private messageService2: MessageService) {
    this.messages = this.messageService2.getMessages();
   }

  ngOnInit() {
  }

  onAddMessage(message: Message) {
    this.messages.push(message);
  }

}
