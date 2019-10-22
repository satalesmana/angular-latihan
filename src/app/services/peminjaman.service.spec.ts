import { TestBed } from '@angular/core/testing';

import { PeminjamanService } from './peminjaman.service';

describe('PeminjamanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeminjamanService = TestBed.get(PeminjamanService);
    expect(service).toBeTruthy();
  });
});
