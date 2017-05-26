import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<app-header></app-header>
  <div class="container">
    <h1>Hello {{name}}</h1><a routerLink="/dashboard">AppComponent</a><a routerLink="/contact">contact</a>
    <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent { name = 'Angular!!!'; }
