import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-menu-slide-bar></app-menu-slide-bar>
  <app-container1></app-container1>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app';
}
