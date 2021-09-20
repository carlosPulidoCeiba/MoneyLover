import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryBillingComponent } from './history-billing.component';

describe('HistoryBillingComponent', () => {
  let component: HistoryBillingComponent;
  let fixture: ComponentFixture<HistoryBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryBillingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
