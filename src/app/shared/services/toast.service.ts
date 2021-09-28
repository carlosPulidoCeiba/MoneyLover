import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  public toastSucces() {
    return Swal.fire({
      title: 'Exitoso',
      text: 'Tu transferencia ha sido realizada.',
      icon: 'success',
      showConfirmButton: true,
      confirmButtonText: 'Ok'
    });
  }

  public toastDeleteSucces() {
    return Swal.fire({
      title: 'Exitoso',
      text: 'Tu registro ha sido eliminado.',
      icon: 'success',
      showConfirmButton: true,
      confirmButtonText: 'Ok'
    });
  }

  public toastConfirmDelete() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger mr-3'
      },
      buttonsStyling: false
    });

    return swalWithBootstrapButtons.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas eliminar este registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    });
  }

}
