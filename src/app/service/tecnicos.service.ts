import { Injectable, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()
export class TecnicosService extends BookService {
  usersUrl = 'api/books/?tipo=tecnico';
 }

 