import { TestBed } from '@angular/core/testing';

import { Rezervasyon } from './rezervasyon';

describe('Rezervasyon', () => {
  let service: Rezervasyon;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Rezervasyon);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
