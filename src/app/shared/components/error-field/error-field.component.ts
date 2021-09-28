import { ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'error-field',
  templateUrl: './error-field.component.html',
  styles: [`.hide {
    display: none;
  } `]
})
export class ErrorFieldComponent {

  @Input()
  set text(value) {
    if (value !== this.mensajeError) {
      this.mensajeError = value;
      this.ocultar = !value;
      this.cdr.detectChanges();
    }
  }

  mensajeError: string;
  ocultar = true;

  constructor(private cdr: ChangeDetectorRef) { }

}
