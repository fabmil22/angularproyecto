import { TecnicosService } from './../../service/tecnicos.service';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-tecnico',
  template: `
  <app-books-details></app-books-details>
`,
  providers: [{ provide: BookService , useClass: TecnicosService}]
})
export class TecnicoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
