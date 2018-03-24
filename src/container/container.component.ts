import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    templateUrl: 'container.component.html',
    styleUrls: ['container.component.css']
})

export class ContainerComponent {
    folderName: String = 'JTC Sharing';


    goToFolder() {
        this.folderName = 'JTC Share > Demo';
    }

    goToBack() {
        this.folderName = 'JTC Sharing';
    }

}
