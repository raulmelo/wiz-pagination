import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wiz-pagination',
  templateUrl: './wiz-pagination.component.html',
  styleUrls: ['./wiz-pagination.component.css']
})
export class WizPaginationComponent implements OnInit {
  public valueSelect: number;

  public itens = [
    { 'value': 1 },
    { 'value': 2 },
    { 'value': 3 },
    { 'value': 4 },
    { 'value': 5 },
    { 'value': 6 },
    { 'value': 7 },
    { 'value': 8 },
    { 'value': 9 },
  ]

  constructor() { }

  ngOnInit() {

  }

  select(e) {
    this.valueSelect = e.value;

  }
}

