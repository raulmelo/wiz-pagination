import { WizPaginationModule } from './../../projects/wiz-pagination/src/lib/wiz-pagination.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { WizModalModule } from 'projects/wiz-modal/src/public-api';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WizPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
