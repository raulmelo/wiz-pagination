import { NgModule } from '@angular/core';
import { WizPaginationComponent } from './wiz-pagination.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [WizPaginationComponent],
  imports: [
    BrowserModule
  ],
  exports: [WizPaginationComponent]
})
export class WizPaginationModule { }
