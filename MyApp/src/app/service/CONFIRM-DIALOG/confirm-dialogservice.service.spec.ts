import { TestBed } from '@angular/core/testing';

import { ConfirmDialogserviceService } from './confirm-dialogservice.service';

describe('ConfirmDialogserviceService', () => {
  let service: ConfirmDialogserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmDialogserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
