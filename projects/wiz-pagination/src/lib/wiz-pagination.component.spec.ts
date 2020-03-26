import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizPaginationComponent } from './wiz-pagination.component';

describe('WizPaginationComponent', () => {
  let component: WizPaginationComponent;
  let fixture: ComponentFixture<WizPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizPaginationComponent ]
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
});
