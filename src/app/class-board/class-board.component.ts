import {Component} from '@angular/core';

@Component({
    selector: 'app-class-board',
    templateUrl: 'class-board.component.html',
    styleUrls: ['class-board.component.css']
})

export class ClassBoardComponent {
    now: Date = new Date(Date.now());
    // tslint:disable-next-line:member-ordering
    files: any[] = [{
        name: 'Angular',
        modified: new Date(Date.now()),
        members: ['Kian', 'Hue'],
        type: 'folder'
    }, {
        name: 'Janeto Intro',
        modified: new Date(Date.now()),
        members: ['Kha', 'Linh'],
        type: 'folder'
    }, {
        name: 'Nodejs',
        modified: new Date(Date.now()),
        members: ['Khanh', 'Huy'],
        type: 'docx'
    }];
    // tslint:disable-next-line:member-ordering
    folder: String = 'Home';

    constructor() {}

    changeFolder(name) {
        this.folder = name;
    }

}
