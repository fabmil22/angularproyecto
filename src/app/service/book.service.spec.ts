import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule , HttpTestingController } from '@angular/common/http/testing'
import { BookService } from './book.service';

describe('BookService', () => {

let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
       providers: [BookService]
    });

    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([BookService], (service: BookService) => {
    expect(service).toBeTruthy();
  }));

/*
  it('should return ', inject([BookService], (service: BookService) => {
    // Arrange
  const mockResponse = {
    results: [{
      'tipo'    : 'suspenso',
      'paginas' : 300,
      'precio'  : 20,
      'autor'   : 'Patricia Cornwell',
      'titulo'  : 'El psicoanalista',
      'portada' : 'assets/imgs/1.jpg',
      'idcodigo': 'sus0001'
     }]
  };
  let dataError, dataResponse;

  service.getbooks().subscribe((response) => {
    dataResponse = response['results'];
  }, (error) => {
    dataError = error;
  });
// Assert
expect(dataResponse.length).toEqual(1);

  }));

*/

});
