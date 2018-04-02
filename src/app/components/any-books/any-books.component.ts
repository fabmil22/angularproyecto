import { Component, OnInit } from '@angular/core';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-any-books',
  providers:  [BookService ],
  template: '<app-books-details></app-books-details>'
})
export class AnyBooksComponent  {}
