import { MessageService } from './../../messages.service';
import { Message } from './../../message.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Contact } from 'src/app/contacts/contacts.model';


@Component({
  selector: 'cms-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
  @ViewChild('subject') subject: ElementRef;
  @ViewChild('msgText') msgText: ElementRef;
  currentSender = '1';

  constructor(private messageService2: MessageService) { }

  ngOnInit() {
  }

  onSendMessage() {
    const subject = this.subject.nativeElement.value;
    const msgText  = this.msgText.nativeElement.value;
    const newMessage = new Message('1', subject, msgText, this.currentSender);
    this.messageService2.addMessage(newMessage);

    this.onClear();
  }

  onClear() {
    this.subject.nativeElement.value = '';
    this.msgText.nativeElement.value = '';
  }

}
