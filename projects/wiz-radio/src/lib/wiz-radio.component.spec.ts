import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizRadioComponent } from './wiz-radio.component';

describe('WizRadioComponent', () => {
  let component: WizRadioComponent;
  let fixture: ComponentFixture<WizRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WizRadioComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('not null', () => {
    expect(component.name).not.toBeNull();
    expect(component.value).not.toBeNull();
    component.toggle('component.value');
  });


});
