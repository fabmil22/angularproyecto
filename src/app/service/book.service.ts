import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BookService {

  tipo = 'neutro';
  paginas = 0;
  precio = 0;
  autor = 'neutro';
  titulo = '';
  portada = '';
  idcodigo = '';



  constructor( private  http: HttpClient) {}

  getName() {
    return this.titulo;
  }

  getPaginas() {
    return this.paginas;
  }
  getTITULO() {
    return this.titulo;
  }
}
