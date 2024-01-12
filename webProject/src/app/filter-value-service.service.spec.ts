import { TestBed } from '@angular/core/testing';

import { FilterValueServiceService } from './filter-value-service.service';

describe('FilterValueServiceService', () => {
  let service: FilterValueServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterValueServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
