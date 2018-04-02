import { TestBed, inject } from '@angular/core/testing';

import { TecnicosService } from './tecnicos.service';

describe('TecnicosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TecnicosService]
    });
  });

  it('should be created', inject([TecnicosService], (service: TecnicosService) => {
    expect(service).toBeTruthy();
  }));
});
