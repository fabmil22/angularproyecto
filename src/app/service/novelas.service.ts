import { BookService } from './book.service';
import { Injectable } from '@angular/core';


@Injectable()
export class NovelasService extends BookService {



  tipo = 'suspenso';
  paginas = 320;
  precio = 20;
  autor = 'ALEXANDRE SAUDATE';
  titulo = 'REST: CONSTRUA API´S INTELIGENTES DE MANEIRA SIMPLES';
  portada = 'assets/imgs/2.jpg';
  idcodigo = 'tec0001';
  all: any[] = [];
  usersUrl = '/api/books';


}
