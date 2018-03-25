import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { style } from '@angular/core/src/animation/dsl';

@Component({
    selector: 'app-class-board',
    templateUrl: 'class-board.component.html',
    styleUrls: ['class-board.component.scss']
})

export class ClassBoardComponent {
    temp2: any;
    temp1: any;
    showForm = false;
    newName: String = '';
    newMembers: String = '';
    newType: String = '';
    folder: String = 'Home';
    now: Date = new Date(Date.now());
    // tslint:disable-next-line:member-ordering
    files: any[] = [{
        // id: 1,
        name: 'Angular',
        modified: new Date(Date.now()),
        members: ['Kian', 'Hue'],
        type: 'folder'
    }, {
        // id: 2,
        name: 'Janeto Intro',
        modified: new Date(Date.now()),
        members: ['Kha', 'Linh'],
        type: 'folder'
    }, {
        // id: 3,
        name: 'Nodejs',
        modified: new Date(Date.now()),
        members: ['Khanh', 'Huy'],
        type: 'docx'
    }];
    // tslint:disable-next-line:member-ordering


    constructor() { }

    changeFolder(name) {
        this.folder = name;
    }

    Them() {
        if (this.newName.length !== 0 && this.newMembers.length !== 0 && this.newType.length !== 0) {
            this.files.push({
                // id: this.files.length + 1,
                name: this.newName,
                modified: new Date(Date.now()),
                members: this.newMembers,
                type: this.newType
            });
            this.newName = '';
            // tslint:disable-next-line:label-position
            this.newMembers = '';
            this.newType = '';
            this.showForm = false;
        } else if (this.newName.length === 0 || this.newMembers.length === 0 || this.newType.length === 0) {
            const check = confirm('Bạn chưa nhập dữ liệu? Bạn có muốn tiếp tục nhập?');
            if (check === true) {
                this.showForm = true;
            } else {
                this.showForm = false;
            }
        }
    }
    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
    }

    Xoa(name) {
        if (this.temp1 === true) {
            for (let i = 0; i < this.files.length; i++) {
                if (this.files[i].name === name) {
                    this.files.splice(i, 1);
                }
            }
        } else {
            alert('Vui lòng chọn file cần xóa');
        }
    }

    checkbox(name) {
        this.temp1 = name;
    }
}
