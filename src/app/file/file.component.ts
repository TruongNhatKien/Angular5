import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[app-file]',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent {
  checked = false;
  @Input() file: any;
  @Output() go: EventEmitter<String> = new EventEmitter<String>();
  @Output() go1: EventEmitter<String> = new EventEmitter<String>();
  @Output() go2: EventEmitter<String> = new EventEmitter<String>();
  @Output() go3: EventEmitter<String> = new EventEmitter<String>();


  constructor() {
  }

  goTo(name: String) {
    this.go.emit(name);
  }

  goTo1(name: String) {
    this.go1.emit(name);
  }

  checkbox(name) {
    if (this.checked === false) {
      this.checked = true;
    } else {
    this.checked = false;
    }
    name = this.checked;
    this.go2.emit(name);
  }
}
