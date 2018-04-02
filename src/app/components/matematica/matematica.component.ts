import { MatematicasService } from './../../service/matematicas.service';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-matematica',
  template: `
  <app-books-details></app-books-details>
`,
  styleUrls: ['./matematica.component.css'],
  providers: [{ provide: BookService , useClass: MatematicasService}]
})
export class MatematicaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
