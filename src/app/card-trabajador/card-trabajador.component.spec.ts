import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTrabajadorComponent } from './card-trabajador.component';

describe('CardTrabajadorComponent', () => {
  let component: CardTrabajadorComponent;
  let fixture: ComponentFixture<CardTrabajadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTrabajadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
