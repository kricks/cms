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

  constructor(private documentService: DocumentService,
              private router: Router,
              private route: ActivatedRoute) {

              }

  ngOnInit() {
    this.route.params.subscribe (
      (params: Params) => {
        const id = params.id;

        if (params.id === undefined || null) {
          this.editMode = false;
          return;
        }

        const originalDocument = this.documentService.getDocument(id);

        if (originalDocument === undefined || null) {
          return;
        }
        this.editMode = true;
        this.document = JSON.parse(JSON.stringify(this.originalDocument));
      }
    );
  }

  onSubmit(form: NgForm) {
    const values = form.value;

    const newDocument = new Document(values.id, values.name, values.description, values.url);

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
