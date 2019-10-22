import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryStockComponent } from './country-stock.component';

describe('CountryStockComponent', () => {
  let component: CountryStockComponent;
  let fixture: ComponentFixture<CountryStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
