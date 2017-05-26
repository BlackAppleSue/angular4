import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1><a routerLink="/dashboard">AppComponent</a><a routerLink="/contact">contact</a>
  <router-outlet></router-outlet>`
})
export class AppComponent { name = 'Angular!!!'; }
