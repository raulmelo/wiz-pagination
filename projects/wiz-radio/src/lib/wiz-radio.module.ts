import { NgModule } from '@angular/core';
import { WizRadioComponent } from './wiz-radio.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [WizRadioComponent],
  imports: [
    CommonModule
  ],
  exports: [WizRadioComponent]
})
export class WizRadioModule { }
