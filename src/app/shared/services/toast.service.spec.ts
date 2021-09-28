import { TestBed } from '@angular/core/testing';
import { ToastService } from './toast.service';

describe('ToastService', () => {
  let service: ToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastService);
  });

  it('Debre crearse', () => {
    expect(service).toBeTruthy();
  });

  it('Mostrar sweetalert Exitoso', () => {
    const spynToastSucces = spyOn(service, 'toastSucces').and.callThrough();
    service.toastSucces();
    expect(spynToastSucces).toHaveBeenCalled();
  });

  it('Mostrar sweetalert Eliminado exitoso', () => {
    const spynToastDeleteSucces = spyOn(service, 'toastDeleteSucces').and.callThrough();
    service.toastDeleteSucces();
    expect(spynToastDeleteSucces).toHaveBeenCalled();
  });

  it('Mostrar sweetalert Confirmacion eliminado', () => {
    const spynToastConfirm = spyOn(service, 'toastConfirmDelete').and.callThrough();
    service.toastConfirmDelete();
    expect(spynToastConfirm).toHaveBeenCalled();
  });

});
