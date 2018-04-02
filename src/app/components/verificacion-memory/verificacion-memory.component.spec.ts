import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificacionMemoryComponent } from './verificacion-memory.component';

describe('VerificacionMemoryComponent', () => {
  let component: VerificacionMemoryComponent;
  let fixture: ComponentFixture<VerificacionMemoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificacionMemoryComponent ]
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
