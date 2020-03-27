import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wiz-pagination',
  templateUrl: './wiz-pagination.component.html',
  styleUrls: ['./wiz-pagination.component.css']
})
export class WizPaginationComponent implements OnInit {
  @Input() valueSelect: number;
  public filterItensMin: any;
  public filterItensMax: any;
  public minItem: number;
  public maxItem: number;
  public firstNumber: number;
  public lastNumber: number;
  
  public itens = [
    { 'value': 1 },
    { 'value': 2 },
    { 'value': 3 },
    { 'value': 4 },
    { 'value': 5 },
    { 'value': 6 },
    { 'value': 7 },
  ]

  constructor() { }

  ngOnInit() {

    this.select(this.valueSelect);
  }

  select(e) {
    if (this.itens.length != 0) {
      this.firstNumber = this.itens[0].value;
    }
    console.log(this.itens.filter(x => x.value === e));
    if (this.itens.filter(x => x.value === e).length !== 0) {
      this.valueSelect = e;
      this.filterItensMin = this.itens.filter(x => x.value < e);
      this.filterItensMax = this.itens.filter(x => x.value > e);

      if (this.filterItensMin.length !== 0) {
        this.minItem = this.filterItensMin.pop().value;
      } else {
        this.minItem = null;
      }
      if (this.filterItensMax.length !== 0) {
        this.maxItem = this.filterItensMax[0].value;
        this.lastNumber = this.filterItensMax.pop().value;
      } else {
        this.lastNumber = this.itens[this.itens.length - 1].value;
      }


      console.log(this.filterItensMin);
    }
  }
}

