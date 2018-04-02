import { BookService } from './../../service/book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-details',
  template: `<h3> {{titulo}} su autor es {{autor}} </h3> `,
  styleUrls: ['./books-details.component.css']
})
export class BooksDetailsComponent implements OnInit {


  titulo: string;
  autor: string;

  constructor( private  ser: BookService) { }

  ngOnInit() {
     this.autor = this.ser.getName();
     this.titulo = this.ser.getTITULO();
 }
 

}
