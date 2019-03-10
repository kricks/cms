import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

@Injectable()
export class DocumentService {
    documents: Document[] = [];
    documentSelectedEvent = new EventEmitter<Document>();
    documentListChangedEvent = new Subject<Document[]>();
    maxDocumentId: number;

    constructor(private http: HttpClient,
                private documentservice: DocumentService) {
        this.documents = MOCKDOCUMENTS;
        this.maxDocumentId = this.getMaxId();
    }

    getDocuments() {
        this.http.get('https://project-cms-6b40b.firebaseio.com/documents.json')
        .subscribe(
            (documents: Document[]) => {
                this.documents = documents;
                // this.maxDocumentId = this.getMaxId();
                this.documents.sort((a, b) =>
                (a['name'] < b['name']) ? 1 : (a['name'] > b['name']) ? -1 : 0);
                this.documentListChangedEvent.next(this.documents.slice());
            }
            , (error: any) => {
                console.log('Error: Something went wrong...');
            }
        );
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

        this.maxDocumentId++;
        newDocument.id = String(this.maxDocumentId);

        this.documents.push(newDocument);
        const documentListClone = this.documents.slice();

        this.documentListChangedEvent.next(documentListClone);

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

    storeDocuments(document: any[]) {
        this.documents = JSON.parse(JSON.stringify(this.documents));
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.put('https://project-cms-6b40b.firebaseio.com/documents.json', this.documentservice.getDocument());
    }

}
