import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { BillingService } from '../../shared/services/billing.service';
import { HomeBillingComponent } from './home-billing.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommonModule } from '@angular/common';
import { Transfer } from '../../shared/models/transfer.interface';
import { Transferencia } from '../../shared/models/transfer.model';
import * as Rx from 'rxjs';

describe('HomeBillingComponent', () => {
  let component: HomeBillingComponent;
  let fixture: ComponentFixture<HomeBillingComponent>;
  let transferServiceStub: Partial<BillingService>;
  let dummyTransfers: Transfer[] = [
    new Transferencia({
      destino: 'Carlos',
      fecha: '25-September-2021',
      monto: 50000,
      id: 0,
      nombre: 'Jose Manuel'
    }),
    new Transferencia({
      destino: 'Carlos',
      fecha: '25-September-2021',
      monto: 80000,
      id: 1,
      nombre: 'Jose David'
    })
  ];

  const totalValue = 130000;

  transferServiceStub = {
    getTransfers: () => {
      return Rx.of(dummyTransfers);
    }
  };


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeBillingComponent],
      imports: [CommonModule, RouterTestingModule, HttpClientTestingModule],
      providers: [
        { provide: BillingService, HttpService, useValue: transferServiceStub }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe crearse', () => {
    expect(component).toBeTruthy();
  });

  it('Consula transferencias del usuario Carlos', () => {
    expect(component.currentValue).toEqual(totalValue);
  })

  it('Crear rutas', () => {
    const quantityRoutes = 2;
    expect(component.optionCard.length).toEqual(quantityRoutes);
  });

  it('Ruta transferir', () => {
    const messege = fixture.nativeElement.querySelector('#options_card');
    expect(messege.innerText).toEqual('Transferir');
  });

  it('Redirigir a recarga', ()=> {
    const spyRedirect = spyOn(component, 'transferToMe').and.callThrough();
    const messege = fixture.nativeElement.querySelector('#recargar'); 
    messege.click();

    expect(spyRedirect).toHaveBeenCalled();
    
  })

});
