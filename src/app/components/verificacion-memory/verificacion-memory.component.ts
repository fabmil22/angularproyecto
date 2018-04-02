import { UsersService } from './../../service/users.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verificacion-memory',
  template: `
  <ul>
  <li  *ngFor="let item of all">{{item.autor}}</li>
  </ul>`,
  styleUrls: ['./verificacion-memory.component.css'],

})
export class VerificacionMemoryComponent implements OnInit {


  all: any[] = [];

  constructor(private ser: UsersService) { }

  ngOnInit() {

  this.ser.getAll(1).subscribe(
     res => { console.log('that ok!');
              this.all = res;
    },
     error => console.log(error)


  );

  }

}
