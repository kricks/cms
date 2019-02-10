import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import { EventEmitter } from '@angular/core';

export class DocumentService {
    public documents: Document[] = [];
    documentSelectedEvent = new EventEmitter<Document>();

    constructor() {
        this.documents = MOCKDOCUMENTS;
    }

    getDocuments() {
        return this.documents.slice();
    }

    getDocument(id: string): Document {
        for (const document of this.documents) {
            if (document.id = id) {
                return document;
            }
        }
        return null;
    }
}
