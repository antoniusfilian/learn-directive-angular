import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Custom element example app';
  count: number = null;

  constructor() {}

  handleCountChanged($event) {
    this.count = $event;
  }

}