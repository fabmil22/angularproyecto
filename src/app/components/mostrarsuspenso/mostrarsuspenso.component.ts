import { NovelasService } from './../../service/novelas.service';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../../service/book.service';


@Component({
  selector: 'app-mostrarsuspenso',
  styleUrls: ['./mostrarsuspenso.component.css'],
  template: '<h2>Novelas</h2><app-cart-show></app-cart-show>',
  providers: [{ provide: BookService , useClass: NovelasService}]
})
export class MostrarsuspensoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
