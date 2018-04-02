import { NovelasService } from './../../service/novelas.service';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-novela',
  template: `
  <app-books-details></app-books-details>
`,
  styles: [],
  providers: [{ provide: BookService , useClass: NovelasService}]
})
export class NovelaComponent implements OnInit {

  ngOnInit() {
  }

}
