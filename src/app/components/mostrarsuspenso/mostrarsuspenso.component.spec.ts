import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarsuspensoComponent } from './mostrarsuspenso.component';

describe('MostrarsuspensoComponent', () => {
  let component: MostrarsuspensoComponent;
  let fixture: ComponentFixture<MostrarsuspensoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarsuspensoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarsuspensoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
