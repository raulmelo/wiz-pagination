import { TestBed } from '@angular/core/testing';

import { WizRadioService } from './wiz-radio.service';

describe('WizRadioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WizRadioService = TestBed.get(WizRadioService);
    expect(service).toBeTruthy();
  });
});
