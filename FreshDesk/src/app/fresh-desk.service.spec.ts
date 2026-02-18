import { TestBed } from '@angular/core/testing';

import { FreshDeskService } from './fresh-desk.service';

describe('FreshDeskService', () => {
  let service: FreshDeskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreshDeskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
