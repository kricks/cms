import { Document } from './document.model';
import { Component, OnInit } from '@angular/core';
import { DocumentService } from './documents.service';

@Component({
  selector: 'cms-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  selectedDocument: Document;

  constructor(private documentService: DocumentService) { }

  ngOnInit() {

  }

}
