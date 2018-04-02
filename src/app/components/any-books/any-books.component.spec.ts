import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnyBooksComponent } from './any-books.component';
import { BooksDetailsComponent } from '../books-details/books-details.component';
import { BookService } from '../../service/book.service';

describe('AnyBooksComponent', () => {
  let component: AnyBooksComponent;
  let fixture: ComponentFixture<AnyBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnyBooksComponent, BooksDetailsComponent ],
      providers: [
        BookService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnyBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
