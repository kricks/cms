export class Contact {
    public contactId: string;
    public name: string;
    public email: string;
    public phone: string;
    public imageURL: string;

    constructor(contactId: string, name: string, email: string, phone: string, imageURL: string) {
        this.contactId = contactId;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.imageURL = imageURL;
    }
}
