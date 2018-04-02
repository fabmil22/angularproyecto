import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';

const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()
export class UsersService {

  private usersUrl = 'api/books';

  constructor( public http: HttpClient) { }


getUsers (): Observable<any> {
    return this.http.get(this.usersUrl)
      .catch(this.handleError);
  }

  getAll(id: number): Observable<any> {
    return this.http.get(this.usersUrl)
    .catch(this.handleError);
}
  private handleError (error: any) {
    return Observable.throw(error);
  }

}
