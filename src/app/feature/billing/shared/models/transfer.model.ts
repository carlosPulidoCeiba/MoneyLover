import { Transfer } from './transfer.interface';

export class Transferencia {

  fecha: string;
  nombre: string;
  destino: string;
  monto: number;
  id: number;

  constructor(transferecia: Transfer) {
    this.fecha = transferecia.fecha;
    this.nombre = transferecia.nombre;
    this.destino = transferecia.destino;
    this.monto = transferecia.monto;
    this.id = transferecia.id;
  }
}
