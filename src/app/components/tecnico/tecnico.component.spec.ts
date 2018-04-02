import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicoComponent } from './tecnico.component';
import { BooksDetailsComponent } from '../books-details/books-details.component';
import { BookService } from '../../service/book.service';

describe('TecnicoComponent', () => {
  let component: TecnicoComponent;
  let fixture: ComponentFixture<TecnicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecnicoComponent,
        BooksDetailsComponent
       ],
       providers: [
        BookService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
