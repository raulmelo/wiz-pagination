import { Component } from '@angular/core';

@Component({
  selector: 'mat-ta-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'wiz-rating';
  Corteste: string;

  teste(e) {
    console.log(e);
  }



  public itens = [
    { 'value': 1 },
    { 'value': 2 },
    { 'value': 3 },
    { 'value': 4 },
    { 'value': 5 },
    { 'value': 6 },
    { 'value': 7 },
  ]

}



