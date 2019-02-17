import { WindRefService } from './../../wind-ref/wind-ref.service';
import { DocumentService } from './../documents.service';
import { Document } from './../document.model';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'cms-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent implements OnInit {
  document: Document;
  id: string;
  nativeWindow: any;

  constructor(private documentService: DocumentService,
    private nativeWindowService: WindRefService,
    private route: ActivatedRoute,
    private router: Router) {
      this.nativeWindow = this.nativeWindowService.getNative();
}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.document = this.documentService.getDocument(this.id);
      }
    );
  }

  onView() {
    if (this.document.url) {
      this.nativeWindow.open(this.document.url);
    }
  }

}
