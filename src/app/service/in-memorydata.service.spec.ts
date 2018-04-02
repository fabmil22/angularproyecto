import { TestBed, inject } from '@angular/core/testing';

import { InMemorydataService } from './in-memorydata.service';

describe('InMemorydataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemorydataService]
    });
  });

  it('should be created', inject([InMemorydataService], (service: InMemorydataService) => {
    expect(service).toBeTruthy();
  }));
});
