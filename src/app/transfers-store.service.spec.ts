import { TestBed } from '@angular/core/testing';

import { TransfersStoreService } from './transfers-store.service';

describe('TransfersStoreService', () => {
  let service: TransfersStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransfersStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
