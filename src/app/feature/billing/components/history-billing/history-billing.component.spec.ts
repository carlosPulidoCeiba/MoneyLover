import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { BillingService } from '../../services/billing.service';
import { HistoryBillingComponent } from './history-billing.component';

describe('HistoryBillingComponent', () => {
  let component: HistoryBillingComponent;
  let fixture: ComponentFixture<HistoryBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryBillingComponent ],
      imports: [CommonModule, RouterTestingModule, HttpClientTestingModule],
      providers: [BillingService, HttpService]
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
