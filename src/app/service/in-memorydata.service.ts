import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';



@Injectable()
export class InMemorydataService implements InMemoryDbService {



  createDb() {

    const books = [
      {
        'tipo'    : 'suspenso',
        'paginas' : 300,
        'precio'  : 20,
        'autor'   : 'Patricia Cornwell',
        'titulo'  : 'El psicoanalista',
        'portada' : 'assets/imgs/1.jpg',
        'idcodigo': 'su0001',
      },
     {
      'tipo'    : 'suspenso',
      'paginas' : 320,
      'precio'  : 40,
      'autor'   : 'ALEXANDRE SAUDATE',
      'titulo'  : 'REST: CONSTRUA API´S INTELIGENTES DE MANEIRA SIMPLES',
      'portada' : 'assets/imgs/2.jpg',
      'idcodigo': 'tec0001',

     }

    ];
    return {books};
  }

  

}
