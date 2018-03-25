import { Component } from '@angular/core';

@Component({
    selector: 'app-content',
    template: `
    <app-class-board></app-class-board>
    <app-menu-control></app-menu-control>
    `,
    styleUrls: ['content.component.scss']
})

export class ContentComponent {
}
