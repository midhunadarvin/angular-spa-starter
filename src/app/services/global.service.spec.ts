import { TestBed, inject } from '@angular/core/testing';

import { GlobalService } from './global.service';

describe('GlobalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalService]
    });
  });

  it('should ...', inject([GlobalService], (service: GlobalService) => {
    expect(service).toBeTruthy();
  }));
});
