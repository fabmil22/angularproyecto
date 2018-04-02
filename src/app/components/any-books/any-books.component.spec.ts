import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnyBooksComponent } from './any-books.component';

describe('AnyBooksComponent', () => {
  let component: AnyBooksComponent;
  let fixture: ComponentFixture<AnyBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnyBooksComponent ]
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
