import { MessageService } from './../messages.service';
import { Message } from './../message.model';
import { Subscription } from 'rxjs';
import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';


@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit, OnDestroy {
  @Output() messageWasAdded = new EventEmitter<Message>();
  messages: Message[] = [];
  subscription: Subscription;

  constructor(private messageService2: MessageService) {
    this.messageService2.getMessages();
   }

  ngOnInit() {
    this.subscription = this.messageService2.messageChanged.subscribe(
      (messages: Message[]) => {
        this.messages = messages;
      }
    );
  }

  onAddMessage(message: Message) {
    this.messages.push(message);
  }

  onSelectedMessage(message: Message[]) {
    this.messageService2.messageChanged.next(message);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
