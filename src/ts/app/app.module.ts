import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent }   from './dashboard.component';
import { HttpModule }    from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { ContactModule }    from './contact/contact.module';
@NgModule({
  imports:      [ BrowserModule,AppRoutingModule,HttpModule,InMemoryWebApiModule.forRoot(InMemoryDataService),ContactModule ],
  declarations: [ AppComponent,DashboardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
