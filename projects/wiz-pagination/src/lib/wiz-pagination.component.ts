import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "wiz-pagination",
  templateUrl: "./wiz-pagination.component.html",
  styleUrls: ["./wiz-pagination.component.css"]
})
export class WizPaginationComponent {
  @Input() valueSelect: number = 1;
  @Output() eventPagination: any = new EventEmitter();
  @Input() type: "default" | "simple" | "selector" | "indicator" = 'default';

  public list: any;
  @Input('total') set total(value: number) {
    this.list = new Array(value).fill(0).map((_: any, index: number) => {
      return {
        value: index + 1
      };
    });
    if (this.list) {
      this.select(this.valueSelect);
    }
  }

  public filterItensMin: any;
  public filterItensMax: any;
  public minItem: number;
  public maxItem: number;
  public firstNumber: number;
  public lastNumber: number;

  constructor() { }

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
