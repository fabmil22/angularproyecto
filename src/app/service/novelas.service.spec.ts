import { TestBed, inject } from '@angular/core/testing';

import { NovelasService } from './novelas.service';

describe('NovelasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NovelasService]
    });
  });

  it('should be created', inject([NovelasService], (service: NovelasService) => {
    expect(service).toBeTruthy();
  }));
});
