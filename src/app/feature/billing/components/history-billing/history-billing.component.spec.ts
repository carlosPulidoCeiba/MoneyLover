import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { Transfer } from '../../shared/models/transfer.interface';
import { Transferencia } from '../../shared/models/transfer.model';
import { BillingService } from '../../shared/services/billing.service';
import { HistoryBillingComponent } from './history-billing.component';
import * as Rx from 'rxjs';

describe('HistoryBillingComponent', () => {
  let component: HistoryBillingComponent;
  let fixture: ComponentFixture<HistoryBillingComponent>;
  let transferServiceStub: Partial<BillingService>;
  let dummyTransfers: Transfer[] = [
    new Transferencia({
      destino: 'Jose Manuel',
      fecha: '25-September-2021',
      monto: 50000,
      id: 0,
      nombre: 'Cristian David'
    }),
    new Transferencia({
      destino: 'Jose David',
      fecha: '25-September-2021',
      monto: 80000,
      id: 1,
      nombre: 'Carlos Martinez'
    })
  ];
  const dummyIdTransfer = 1;
  transferServiceStub = {
    getTransfers: () => {
      return Rx.of(dummyTransfers);
    }, 
    deleteTransfer: () => {
      return Rx.of(dummyIdTransfer);
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoryBillingComponent],
      imports: [CommonModule, RouterTestingModule, HttpClientTestingModule],
      providers: [{ provide: BillingService, HttpService, useValue: transferServiceStub }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe crearse', () => {
    expect(component).toBeTruthy();
  });

  it('Debe consultar transferencias', () => {
    component.ngOnInit();
    expect(component.transfers).toEqual(dummyTransfers);
  });

  it('Debe eliminar la transferencia', ()=> {
    const spyRedirect = spyOn(component, 'deleteRegister').and.callThrough();
    const button_delete = fixture.nativeElement.querySelector('#button_delete');
    fixture.detectChanges();
    button_delete.click();
    expect(spyRedirect).toHaveBeenCalled();
  });

  it('No hay transferencias', () => {
    dummyTransfers = [];
    component.ngOnInit();
    fixture.detectChanges();
    const messege = fixture.nativeElement.querySelector('#show_no_transfers');
    expect(messege.innerText).toEqual('No existen transferencias realizadas');
  });

});
