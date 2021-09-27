import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { BillingService } from '../../shared/services/billing.service';

import { TransferComponent } from './transfer.component';

describe('TransferComponent', () => {
  let component: TransferComponent;
  let fixture: ComponentFixture<TransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferComponent ],
      imports: [CommonModule, RouterTestingModule, HttpClientTestingModule],
      providers: [BillingService, HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('create transfer', () => {
    const data = {
      "fecha": "21-September-2021",
      "nombre": "Carlos",
      "destino": "Carlos",
      "monto": 30000,
      "id": 1
    }
    expect(component.postTransfer(data)).toBeTruthy();
  });


});
