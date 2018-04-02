import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovelaComponent } from './novela.component';
import { BooksDetailsComponent } from '../books-details/books-details.component';
import { BookService } from '../../service/book.service';

describe('NovelaComponent', () => {
  let component: NovelaComponent;
  let fixture: ComponentFixture<NovelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovelaComponent,
        BooksDetailsComponent
       ],
       providers: [
        BookService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
