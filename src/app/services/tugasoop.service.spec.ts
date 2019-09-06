import { TestBed } from '@angular/core/testing';

import { TugasoopService } from './tugasoop.service';

describe('TugasoopService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TugasoopService = TestBed.get(TugasoopService);
    expect(service).toBeTruthy();
  });
});
