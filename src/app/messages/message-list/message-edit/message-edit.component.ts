import { Message } from './../../message.model';
import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'cms-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
  currentSender = 'Katie';

  @ViewChild('subject') subject: ElementRef;
  @ViewChild('msgText') msgText: ElementRef;
  @Output() addMessageEvent = new EventEmitter<Message>();

  constructor() { }

  ngOnInit() {
  }

  onSendMessage() {
    const subject = this.subject.nativeElement.value;
    const msgText  = this.msgText.nativeElement.value;
    const newMessage = new Message('1', subject, msgText, this.currentSender);
    this.addMessageEvent.emit(newMessage);
    this.onClear();
  }

  onClear() {
    this.subject.nativeElement.value = '';
    this.msgText.nativeElement.value = '';
  }

}
