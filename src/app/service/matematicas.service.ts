import { Injectable } from '@angular/core';
import { BookService } from './book.service';

@Injectable()
export class MatematicasService extends BookService{

  usersUrl = 'api/books/?tipo=matematica';
  

}
