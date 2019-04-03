import { MOCKMESSAGES } from './MOCKMESSAGES';
import { Message } from './message.model';
import { EventEmitter, Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class MessageService {
    public messages: Message[] = [];
    messageChanged = new EventEmitter<Message[]>();

    constructor() {
        this.messages = MOCKMESSAGES;
    }

    getMessages() {
        return this.messages.slice();
    }

    getMessage(id: string): Message {
        for (const message of this.messages) {
            if (message.id = id) {
                return message;
            }
        }
        return null;
    }

    addMessage(message: Message) {
        this.messages.push(message);
        this.messageChanged.emit(this.messages.slice());
    }
}
