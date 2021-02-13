import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerSearchesComponent } from './banner-searches.component';

describe('BannerSearchesComponent', () => {
  let component: BannerSearchesComponent;
  let fixture: ComponentFixture<BannerSearchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerSearchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerSearchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
