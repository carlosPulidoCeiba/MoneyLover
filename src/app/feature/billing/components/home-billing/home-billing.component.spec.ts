import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { BillingService } from '../../services/billing.service';
import { HomeBillingComponent } from './home-billing.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommonModule } from '@angular/common';


describe('HomeBillingComponent', () => {
  let component: HomeBillingComponent;
  let fixture: ComponentFixture<HomeBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeBillingComponent],
      imports: [CommonModule, RouterTestingModule, HttpClientTestingModule],
      providers: [BillingService, HttpService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('create routes', () => {
    expect(component.optionCard.length).toEqual(2);
  });


});
