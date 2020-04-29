import { TestBed } from '@angular/core/testing';

import { GetuidService } from './getuid.service';

describe('GetuidService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetuidService = TestBed.get(GetuidService);
    expect(service).toBeTruthy();
  });
});
