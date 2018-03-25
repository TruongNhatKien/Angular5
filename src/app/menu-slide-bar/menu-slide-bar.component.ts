import {Component} from '@angular/core';

@Component({
    selector: 'app-menu-slide-bar',
    templateUrl: 'menu-slide-bar.component.html',
    styleUrls: ['menu-slide-bar.component.scss']
})

export class MenuSlideBarComponent {
    menus: String[];

    constructor() {
        this.menus = [
            'My files',
            'Sharing',
            'File requests',
            'Deleted files'
        ];
    }
}
