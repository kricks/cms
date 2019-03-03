import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class DocumentService {
    public documents: Document[] = [];
    documentSelectedEvent = new EventEmitter<Document>();
    documentListChangedEvent = new Subject<Document[]>();
    maxDocumentId: number;

    constructor() {
        this.documents = MOCKDOCUMENTS;
        this.maxDocumentId = this.getMaxId();
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

    getMaxId(): number {
        let maxId = 0;
        for (const documentList of this.documents) {
            const currentId = (parseInt(documentList.id, 0));

            if (currentId > maxId) {
                maxId = currentId;
            }
        }
        return maxId;
    }

    addDocument(newDocument: Document) {
        if (newDocument === undefined || null) {
            return;
        }

        // this.maxDocumentId++;
        // newDocument.id = this.maxDocumentId;

        // newDocument.push(this.documents);
        // const documentListClone = this.documents.slice();

        // this.documentListChangedEvent.next(documentListClone);

    }

    updateDocument(originalDocument: Document, newDocument: Document) {
        if (originalDocument || newDocument === undefined || null) {
            return;
        }

        const pos = this.documents.indexOf(originalDocument);

        if (pos < 0) {
            return;
        }

        newDocument.id = originalDocument.id;
        this.documents[pos] = newDocument;
        const documentListClone = this.documents.slice();
        this.documentListChangedEvent.next(documentListClone);
    }

    deleteDocument(document: Document) {
        if (document === undefined || null) {
            return;
        }

        const pos = this.documents.indexOf(document);

        if (pos < 0) {
            return;
        }

        this.documents.splice(pos, 1);
        const documentsListClone = this.documents.slice();
        this.documentListChangedEvent.next(documentsListClone);
    }

}
