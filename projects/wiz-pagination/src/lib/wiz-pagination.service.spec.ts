import { TestBed } from '@angular/core/testing';

import { WizPaginationService } from './wiz-pagination.service';

describe('WizPaginationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WizPaginationService = TestBed.get(WizPaginationService);
    expect(service).toBeTruthy();
  });
});
