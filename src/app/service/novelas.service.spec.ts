import { TestBed, inject } from '@angular/core/testing';

import { NovelasService } from './novelas.service';
import { BookService } from './book.service';

describe('NovelasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NovelasService , BookService]
    });
  });

  it('should be created', inject([NovelasService], (service: NovelasService) => {
    expect(service).toBeTruthy();
  }));
});
