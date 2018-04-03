import { Observable } from 'rxjs/Observable';
import { BookService } from './../../service/book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-show',
  template: `

<hr/>
<div  class="libros">
<div class="card  col-sm-3"  style=" margin:12px; padding:12px;"  *ngFor="let book of  all">
<img class="card-img-top" src="{{ book.portada}}" alt="Card image cap">
<div class="card-body">
  <p class="card-text">{{book.titulo}}</p>
</div>
</div>
</div>

`,
  styleUrls: ['./cart-show.component.css']
})


export class CartShowComponent implements OnInit {

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
