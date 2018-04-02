import { BookService } from './book.service';
import { Injectable } from '@angular/core';


@Injectable()
export class NovelasService extends BookService {



  usersUrl = 'api/books/?tipo=suspenso';


}
