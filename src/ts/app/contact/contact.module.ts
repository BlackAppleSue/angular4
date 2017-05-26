import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { ListComponent }  from './list.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule }    from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  imports:      [ BrowserModule,AppRoutingModule,HttpModule ],
  declarations: [ AppComponent,ListComponent ],
  bootstrap:    [ AppComponent ]
})
export class ContactModule { }
