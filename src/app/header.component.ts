import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'cms-app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    selectedFeatureEvent = new EventEmitter<string>();

    onSelected(selectedEvent: string) {
        this.selectedFeatureEvent.emit(selectedEvent);
    }
}
