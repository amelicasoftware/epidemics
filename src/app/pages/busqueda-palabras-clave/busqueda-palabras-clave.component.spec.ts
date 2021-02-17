import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaPalabrasClaveComponent } from './busqueda-palabras-clave.component';

describe('BusquedaPalabrasClaveComponent', () => {
  let component: BusquedaPalabrasClaveComponent;
  let fixture: ComponentFixture<BusquedaPalabrasClaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaPalabrasClaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaPalabrasClaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
