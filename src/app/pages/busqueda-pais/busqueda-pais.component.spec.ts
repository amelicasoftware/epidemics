import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaPaisComponent } from './busqueda-pais.component';

describe('BusquedaPaisComponent', () => {
  let component: BusquedaPaisComponent;
  let fixture: ComponentFixture<BusquedaPaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaPaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
