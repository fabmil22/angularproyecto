import { TecnicosService } from './../../service/tecnicos.service';
import { MatematicasService } from './../../service/matematicas.service';
import { MatematicaComponent } from './../matematica/matematica.component';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../../service/book.service';



@Component({
  selector: 'app-mostrartecnicos',
  template: '<h2>Libros Tecnicos</h2><app-cart-show></app-cart-show>',
  styleUrls: ['./mostrartecnicos.component.css'],
  providers: [{ provide: BookService , useClass: TecnicosService}]
})
export class MostrartecnicosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
