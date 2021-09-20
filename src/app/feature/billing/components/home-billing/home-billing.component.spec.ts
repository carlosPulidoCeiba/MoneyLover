import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBillingComponent } from './home-billing.component';

describe('HomeBillingComponent', () => {
  let component: HomeBillingComponent;
  let fixture: ComponentFixture<HomeBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBillingComponent ]
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
});
