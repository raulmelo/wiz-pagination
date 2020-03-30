import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wiz-pagination',
  templateUrl: './wiz-pagination.component.html',
  styleUrls: ['./wiz-pagination.component.css']
})
export class WizPaginationComponent implements OnInit {
  @Input() valueSelect: number;
  @Input() list: any;
  @Output() eventPagination: any = new EventEmitter();
  @Input() type: any;



  public filterItensMin: any;
  public filterItensMax: any;
  public minItem: number;
  public maxItem: number;
  public firstNumber: number;
  public lastNumber: number;



  constructor() { }

  ngOnInit() {

    this.select(this.valueSelect);
  }

  select(e) {
    if (this.list.length !== 0) {
      this.firstNumber = this.list[0].value;
    }
    if (this.list.filter(x => x.value === e).length !== 0) {
      this.valueSelect = e;
      this.filterItensMin = this.list.filter(x => x.value < e);
      this.filterItensMax = this.list.filter(x => x.value > e);

      if (this.filterItensMin.length !== 0) {
        this.minItem = this.filterItensMin.pop().value;
      } else {
        this.minItem = null;
      }
      if (this.filterItensMax.length !== 0) {
        this.maxItem = this.filterItensMax[0].value;
        this.lastNumber = this.filterItensMax.pop().value;
      } else {
        this.lastNumber = this.list[this.list.length - 1].value;
      }
    }
    this.eventPagination.emit(this.valueSelect);
  }
}

