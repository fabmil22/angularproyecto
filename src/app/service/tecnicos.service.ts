import { Injectable } from '@angular/core';
import { BookService } from './book.service';

@Injectable()
export class TecnicosService extends BookService {

  tipo = 'suspenso';
  paginas = 320;
  precio = 20;
  autor = 'ALEXANDRE SAUDATE';
  titulo = 'REST: CONSTRUA API´S INTELIGENTES DE MANEIRA SIMPLES';
  portada = 'assets/imgs/2.jpg';
  idcodigo = 'tec0001';

}
