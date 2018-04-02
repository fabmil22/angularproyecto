import { TestBed, inject } from '@angular/core/testing';

import { MatematicasService } from './matematicas.service';
import { BookService } from './book.service';

describe('MatematicasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatematicasService , BookService]
    });
  });

  it('should be created', inject([MatematicasService], (service: MatematicasService) => {
    expect(service).toBeTruthy();
  }));
});
