import { MOCKMESSAGES } from './MOCKMESSAGES';
import { Message } from './message.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    public messages: Message[] = [];
    messageChanged = new EventEmitter<Message[]>();
    maxMessageId: number;

    constructor(private http: HttpClient) {
        this.maxMessageId = this.getMaxId();
    }

    getMessages() {
        this.http.get('https://project-cms-6b40b.firebaseio.com/messages.json')
          .subscribe(
            (messages: Message[]) => {
              this.messages = messages;
              this.messages.sort((a, b) => (a['name'] < b['name']) ? 1 : (a['name'] > b['name']) ? -1 : 0);
              this.messageChanged.next(this.messages.slice());
            }, (error: any) => {
              console.log('cannot get messages');
            }
          );
      }

    getMessage(id: string): Message {
        for (const message of this.messages) {
            if (message.id === id) {
                return message;
            }
        }
        return null;
    }

    // addMessage(message: Message) {
    //     this.messages.push(message);
    //     this.messageChanged.emit(this.messages.slice());
    // }
    addMessage(newMessage: Message) {
        if (newMessage === null) {
          return;
        }
        this.maxMessageId++;
        newMessage.id = String(this.maxMessageId);
        this.messages.push(newMessage);
        this.storeMessages();
      }

    getMaxId(): number {
        let maxId = 0;
        for (const message of this.messages) {
          const currentId = +message.id;
          if (currentId > maxId) {
            maxId = currentId;
          }
        }
        return maxId;
      }

      storeMessages() {
        this.messages = JSON.parse(JSON.stringify(this.messages));
        const header = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.put('https://project-cms-6b40b.firebaseio.com/messages.json', this.messages, { headers: header})
          .subscribe(
            (messages: Message[]) => {
              this.messageChanged.next(this.messages.slice());
            }
          );
      }
}
