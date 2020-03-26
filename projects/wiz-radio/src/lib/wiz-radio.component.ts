import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wiz-radio',
  templateUrl: './wiz-radio.component.html',
  styleUrls: ['./wiz-radio.component.css']
})
export class WizRadioComponent implements OnInit {
  @Input() name;
  @Input() value;
  @Input() disabled: boolean;

  @Output() returnEvent: any = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  toggle(e) {
    this.value = e;
    this.returnEvent.emit(this.value);
  }
}
