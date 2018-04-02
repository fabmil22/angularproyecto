import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificacionMemoryComponent } from './verificacion-memory.component';
import { BookService } from '../../service/book.service';

describe('VerificacionMemoryComponent', () => {
  let component: VerificacionMemoryComponent;
  let fixture: ComponentFixture<VerificacionMemoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificacionMemoryComponent ],
      providers: [
        BookService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificacionMemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
