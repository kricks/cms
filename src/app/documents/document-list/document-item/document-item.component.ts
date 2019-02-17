import { Document } from './../../document.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cms-document-item',
  templateUrl: './document-item.component.html',
  styleUrls: ['./document-item.component.css']
})
export class DocumentItemComponent implements OnInit {
  @Output() documentSelected = new EventEmitter<Document>();
  @Input() document: Document;

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.documentSelected.emit();
  }

}
