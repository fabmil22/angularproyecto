import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrartecnicosComponent } from './mostrartecnicos.component';

describe('MostrartecnicosComponent', () => {
  let component: MostrartecnicosComponent;
  let fixture: ComponentFixture<MostrartecnicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrartecnicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrartecnicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
