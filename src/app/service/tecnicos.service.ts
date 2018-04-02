import { Injectable, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()
export class TecnicosService extends BookService {
  
  tipo = 'suspenso';
  paginas = 320;
  precio = 20;
  autor = 'ALEXANDRE SAUDATE';
  titulo = 'REST: CONSTRUA API´S INTELIGENTES DE MANEIRA SIMPLES';
  portada = 'assets/imgs/2.jpg';
  idcodigo = 'tec0001';
  all: any[] = [];
  usersUrl = '/api/books';
 }
