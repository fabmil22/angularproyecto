import { TestBed, inject } from '@angular/core/testing';

import { TecnicosService } from './tecnicos.service';
import { BookService } from './book.service';

describe('TecnicosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TecnicosService ,  BookService]
    });
  });

  it('should be created', inject([TecnicosService], (service: TecnicosService) => {
    expect(service).toBeTruthy();
  }));
});
