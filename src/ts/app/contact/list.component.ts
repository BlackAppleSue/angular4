import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}111111111111</h1><a routerLink="/">AppComponent</a>
  <router-outlet></router-outlet>`
})
export class ListComponent { name = 'Angular!!!'; }
