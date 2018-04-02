import { BooksDetailsComponent } from './components/books-details/books-details.component';
import { MatematicaComponent } from './components/matematica/matematica.component';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NovelaComponent } from './components/novela/novela.component';
import { TecnicoComponent } from './components/tecnico/tecnico.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NovelaComponent,
        TecnicoComponent,
        MatematicaComponent,
        BooksDetailsComponent
      ],
      imports: [
        HttpClientTestingModule,
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as titleMain 'Libro'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.titleMain).toEqual('Libros');
  }));
  
});
