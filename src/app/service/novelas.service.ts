import { BookService } from './book.service';
import { Injectable } from '@angular/core';

@Injectable()
export class NovelasService extends BookService {

  tipo = 'suspenso';
  paginas = 300;
  precio = 20;
  autor = 'Patricia Cornwell';
  titulo = 'El psicoanalista';
  portada = 'assets/imgs/1.jpg';
  idcodigo = 'su0001';

}
