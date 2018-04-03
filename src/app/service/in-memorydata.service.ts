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
        'idcodigo': 'sus0001',
      },

      {
        'tipo'    : 'Matematica',
        'paginas' : 320,
        'precio'  : 40,
        'autor'   : 'Deborah Waugh',
        'titulo'  : 'Basic Algebra For Kids: Simple Step by Step Guide For Learning, Homework and Revision',
        'portada' : 'assets/imgs/3.jpg',
        'idcodigo': 'mat0001',
  
       },
       {
        'tipo'    : 'Matematica',
        'paginas' : 320,
        'precio'  : 40,
        'autor'   : 'Sara Salvador y Samuel Gómez',
        'titulo'  : 'El tío Petros y la conjetura de Goldbach',
        'portada' : 'assets/imgs/4.jpg',
        'idcodigo': 'mat0001',
  
       },
  
       {
        'tipo'    : 'Matematica',
        'paginas' : 320,
        'precio'  : 40,
        'autor'   : 'Hans Magnus Enzensberger',
        'titulo'  : 'El Diablo De Los Números (Las Tres Edades / Nos Gusta Saber)',
        'portada' : 'assets/imgs/5.jpg',
        'idcodigo': 'mat0001',
  
       },

     {
      'tipo'    : 'tecnico',
      'paginas' : 320,
      'precio'  : 40,
      'autor'   : 'ALEXANDRE SAUDATE',
      'titulo'  : 'REST: CONSTRUYA API´S INTELIGENTES DE MANERA SIMPLE',
      'portada' : 'assets/imgs/2.jpg',
      'idcodigo': 'tec0001',

     },
     {
      'tipo'    : 'Matematica',
      'paginas' : 320,
      'precio'  : 40,
      'autor'   : 'Deborah Waugh',
      'titulo'  : 'Basic Algebra For Kids: Simple Step by Step Guide For Learning, Homework and Revision',
      'portada' : 'assets/imgs/3.jpg',
      'idcodigo': 'mat0001',

     },
     {
      'tipo'    : 'Matematica',
      'paginas' : 320,
      'precio'  : 40,
      'autor'   : 'Sara Salvador y Samuel Gómez',
      'titulo'  : 'El tío Petros y la conjetura de Goldbach',
      'portada' : 'assets/imgs/4.jpg',
      'idcodigo': 'mat0001',

     },

     {
      'tipo'    : 'Matematica',
      'paginas' : 320,
      'precio'  : 40,
      'autor'   : 'Hans Magnus Enzensberger',
      'titulo'  : 'El Diablo De Los Números (Las Tres Edades / Nos Gusta Saber)',
      'portada' : 'assets/imgs/5.jpg',
      'idcodigo': 'mat0001',

     }
    ];
    return {books};
  }

  

}
