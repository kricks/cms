import { Document } from './../document.model';
import { DocumentService } from './../documents.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'cms-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.css']
})
export class DocumentEditComponent implements OnInit {
  originalDocument: Document;
  document: Document;
  editMode = false;
  id: string;

  constructor(private documentService: DocumentService,
              private router: Router,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          if (this.id === null || this.id === undefined) {
            this.editMode = false;
            return;
          }
          this.originalDocument = this.documentService.getDocument(this.id);
          if (this.originalDocument === undefined || this.originalDocument === null) {
            this.editMode = false;
            return;
          }
          this.editMode = true;
          this.document = JSON.parse(JSON.stringify(this.originalDocument));
        });
  }

  onSubmit(form: NgForm) {
    const values = form.value;
    const newDocument = new Document(values.id, values.name, values.description, values.url, null);

    if (this.editMode = true) {
      this.documentService.updateDocument(this.originalDocument, newDocument);
    } else {
      this.documentService.addDocument(newDocument);
    }

    this.router.navigate(['/documents']);
  }

  onCancel() {
    this.router.navigate(['/documents']);
  }

}
