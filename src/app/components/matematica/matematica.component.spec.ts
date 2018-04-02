import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatematicaComponent } from './matematica.component';
import { BooksDetailsComponent } from '../books-details/books-details.component';
import { BookService } from '../../service/book.service';

describe('MatematicaComponent', () => {
  let component: MatematicaComponent;
  let fixture: ComponentFixture<MatematicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatematicaComponent,
        BooksDetailsComponent ],
        providers: [
          BookService
        ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatematicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
