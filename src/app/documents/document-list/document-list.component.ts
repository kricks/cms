import { Document } from './../document.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  documents: Document[] = [
    new Document(
      '1'
      , 'Bro. Jackson'
      , 'jacksonk@byui.edu'
      , '208-496-3771'
      , 'https://web.byui.edu/Directory/Employee/jacksonk.jpg'
    )
    , new Document(
      '2'
      , 'Bro. Barzee'
      , 'barzeer@byui.edu'
      , '208-496-3768'
      , 'https://web.byui.edu/Directory/Employee/barzeer.jpg'
    )
    , new Document(
      '3'
      , 'Bro. Barzee'
      , 'barzeer@byui.edu'
      , '208-496-3768'
      , 'https://web.byui.edu/Directory/Employee/barzeer.jpg'
    )
    , new Document(
      '4'
      , 'Bro. Barzee'
      , 'barzeer@byui.edu'
      , '208-496-3768'
      , 'https://web.byui.edu/Directory/Employee/barzeer.jpg'
    )
    , new Document(
      '5'
      , 'Bro. Barzee'
      , 'barzeer@byui.edu'
      , '208-496-3768'
      , 'https://web.byui.edu/Directory/Employee/barzeer.jpg'
    )

  ];

  constructor() { }

  ngOnInit() {
  }

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }
}
