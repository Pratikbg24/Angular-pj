import { TestBed } from '@angular/core/testing';

import { CustomerDetailServiceService } from './customer-detail-service.service';

describe('CustomerDetailServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerDetailServiceService = TestBed.get(CustomerDetailServiceService);
    expect(service).toBeTruthy();
  });
});
