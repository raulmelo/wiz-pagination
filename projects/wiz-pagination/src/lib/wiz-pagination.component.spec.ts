import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizPaginationComponent } from './wiz-pagination.component';

describe('WizPaginationComponent', () => {
  let component: WizPaginationComponent;
  let fixture: ComponentFixture<WizPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WizPaginationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('select', () => {
    const itens = [
      { value: 1 },
      { value: 2 },
      { value: 3 },
      { value: 4 },
      { value: 5 },
      { value: 6 },
      { value: 7 },
    ];
    component.list = itens;
    component.select(2);
  });
});
