import { Observable } from 'rxjs/Observable';
import { BookService } from './../../service/book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-details',
  template: `
   <table   class="table">
   <tr *ngFor="let book of  all" >
   <td width="30%"><img  src="{{ book.portada}}"  width="50%"></td>
   <td  width="50%"class="text-left"><b>{{book.titulo}}</b>
   <p>{{book.autor}}</p></td>
   <td width="20%" class="text-center"><h3>{{book.precio}}</h3></td>
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
        //  res => {this.all = res.filter( x => x.tipo === ); } ,
          res => this.all = res  ,
          error => console.log('error en:', error)


    );
     }

}
