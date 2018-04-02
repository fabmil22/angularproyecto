import {  HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/catch';





@Injectable()
export class BookService {

  tipo = 'neutro';
  paginas = 0;
  precio = 0;
  autor = 'neutro';
  titulo = '';
  portada = '';
  idcodigo = '';
  usersUrl = '';


  constructor( private  http: HttpClient) {}


/*getBooks
** obtengo los libros por medio de un servio
*/
  getbooks (): Observable<any> {
    return this.http.get('api/books').catch(this.handleError);
  }

 



  private handleError (error: any) {
    console.error('error servicio', error);
    return Observable.throw(error);
  }


  /**getName
   ** get autor
   */
  getName() {
    return this.autor;
  }

/**getName
   ** get number pages
   */
  getPaginas() {
    return this.paginas;
  }

  /**getName
   ** get titulo de libro
   */
  getTITULO() {
    return this.titulo;
  }
}
