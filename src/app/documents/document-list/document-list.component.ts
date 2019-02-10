import { DocumentService } from './../documents.service';
import { Document } from './../document.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  documents: Document[] = [];

  constructor(private documentService2: DocumentService) {
    this.documents = this.documentService2.getDocuments();
  }
  ngOnInit() {
    this.documentService2.documentSelectedEvent.subscribe(
      (document: Document[]) => {
        this.documents = document;
      }
    );
  }

  onSelectedDocument(document: Document) {
    this.documentService2.documentSelectedEvent.emit(document);
  }
}
