import { TestBed } from '@angular/core/testing';

import { CanViewDetailGuardService } from './can-view-detail-guard.service';

describe('CanViewDetailGuardService', () => {
  let service: CanViewDetailGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanViewDetailGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
