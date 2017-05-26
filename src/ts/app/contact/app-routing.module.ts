import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';

import { AppComponent }    from './app.component';
import { ListComponent }    from './list.component';
@NgModule({
  imports: [RouterModule.forChild([
    { path: 'contact', component: AppComponent },
    { path: 'contact/list', component: ListComponent }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule {}