import { Observable } from 'rxjs/Observable';
import { BookService } from './../../service/book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-details',
  template: `
   <table   class="table">
   <tr *ngFor="let book of  all" >
   <td><img  src="{{ book.portada}}"  width="120px"></td>
   <td><b>{{book.titulo}}</b>
   <p>{{book.autor}}</p></td>
   <td><h3>{{book.precio}}</h3></td>
   </tr>
  </table> `,
  styleUrls: ['./books-details.component.css']
})
export class BooksDetailsComponent implements OnInit {

  titulo: string;
  autor: string;
  all: any;

  constructor( private  ser: BookService) { }

  ngOnInit() {
    this.ser.getbooks().subscribe(

    res => {this.all = res;
            console.log( 'aqui esta' + this.all); } ,
             error => console.log('error en:', error)


    );
     }

}
