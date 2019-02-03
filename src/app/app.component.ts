import { Component, Input } from '@angular/core';

@Component({
  selector: 'cms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedFeature: string;

switchView(selectedFeature: string) {
  this.selectedFeature = selectedFeature;
}

}
