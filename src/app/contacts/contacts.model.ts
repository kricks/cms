import { Injectable } from '@angular/core';

@Injectable()
export class Contact {
    constructor(public id: string
        , public name: string
        , public email: string
        , public phone: string
        , public imageURL: string
        , public group: Contact[]) {
        }
}
