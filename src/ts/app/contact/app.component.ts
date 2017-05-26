import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1><a routerLink="/">AppComponent</a>
  <a routerLink="/contact/list">List</a>
  `
})
export class AppComponent { name = 'Angular!!!'; }
