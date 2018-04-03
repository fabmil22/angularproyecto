import { MatematicasService } from './../../service/matematicas.service';
import { MatematicaComponent } from './../matematica/matematica.component';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../../service/book.service';
import { TecnicosService } from '../../service/tecnicos.service';

@Component({
  selector: 'app-mostrar-matematicas',
  template: '<h2>Libros de Matematicas</h2><app-cart-show></app-cart-show>',
  styleUrls: ['./mostrar-matematicas.component.css'],
  providers: [{ provide: BookService , useClass: MatematicasService}]
})
export class MostrarMatematicasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
