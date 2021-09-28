import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { Transfer } from '../../shared/models/transfer.interface';
import { Transferencia } from '../../shared/models/transfer.model';
import { BillingService } from '../../shared/services/billing.service';

import { TransferComponent } from './transfer.component';

describe('TransferComponent', () => {
  let component: TransferComponent;
  let fixture: ComponentFixture<TransferComponent>;

  const dummyTransfers: Transfer =
    new Transferencia({
      destino: 'Carlos',
      fecha: '25-September-2021',
      monto: 50000,
      id: 0,
      nombre: 'Jose Manuel'
    });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransferComponent],
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

  it('Debe crearse', () => {
    expect(component).toBeTruthy();
  });

  it('Crear Transferencia', () => {
    const spyRedirect = spyOn(component, 'postTransfer').and.callThrough();
    const sendButton = fixture.debugElement.nativeElement.querySelector('#button_send');
    sendButton.click();
    fixture.detectChanges();
    component.postTransfer(dummyTransfers);
    expect(spyRedirect).toHaveBeenCalled();
  });

  it('Boton deshabilitado, formulario invalido', () => {
    const sendButton = fixture.debugElement.nativeElement.querySelector('#button_send');
    expect(sendButton.disabled).toBeTrue();
  });

  it('Mensaje de error', () => {
    const control = 'destino';
    expect(component.messegeError(control)).toEqual('El campo destino, es requerido.');
  });

  it('Debe mostrar el componente de error', () => {
    const control = 'destino';
    component.form.markAllAsTouched();
    expect(component.showMessegeError(control)).toBeTrue();
  });

  it('Debe redireccionar hacia atras', () => {
    const backButton = fixture.debugElement.nativeElement.querySelector('#button_back');
    fixture.detectChanges();
    backButton.click();
    const redirect = spyOn(component, 'goToBack');
    component.goToBack();
    expect(redirect).toHaveBeenCalled();
  });


});
