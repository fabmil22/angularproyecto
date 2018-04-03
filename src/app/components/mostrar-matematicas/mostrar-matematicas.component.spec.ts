import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarMatematicasComponent } from './mostrar-matematicas.component';

describe('MostrarMatematicasComponent', () => {
  let component: MostrarMatematicasComponent;
  let fixture: ComponentFixture<MostrarMatematicasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarMatematicasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarMatematicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
