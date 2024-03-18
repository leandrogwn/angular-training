import { TestBed } from '@angular/core/testing';

import { SetingsService } from './setings.service';

describe('SetingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SetingsService = TestBed.get(SetingsService);
    expect(service).toBeTruthy();
  });
});
