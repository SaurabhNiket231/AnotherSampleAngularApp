import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleEntryComponent } from './sale-entry.component';

describe('SaleEntryComponent', () => {
  let component: SaleEntryComponent;
  let fixture: ComponentFixture<SaleEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
