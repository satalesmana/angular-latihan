import { TestBed } from '@angular/core/testing';

import { LatihanService } from './latihan.service';

describe('LatihanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LatihanService = TestBed.get(LatihanService);
    expect(service).toBeTruthy();
  });
});
