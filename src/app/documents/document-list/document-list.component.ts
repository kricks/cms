import { DocumentService } from './../documents.service';
import { Document } from './../document.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit, OnDestroy {
  documents: Document[] = [];
  subscription: Subscription;

  constructor(private documentService2: DocumentService) {
  }

  ngOnInit() {
    // this.documents = this.documentService2.getDocuments();
    this.documentService2.getDocuments();
    this.subscription = this.documentService2.documentListChangedEvent
    .subscribe(
      (documentList: Document[]) => {
        this.documents = documentList;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
