import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorFieldComponent } from './error-field.component';

describe('ErrorFieldComponent', () => {
  let component: ErrorFieldComponent;
  let fixture: ComponentFixture<ErrorFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe crearse', () => {
    expect(component).toBeTruthy();
  });

  it('Debe mostrar el mensaje', () => {
    component.text = 'Error en el campo';
    expect(component.ocultar).toBeFalse();
  });

});
