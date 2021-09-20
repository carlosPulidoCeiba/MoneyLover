import { Component, OnInit } from "@angular/core";
import { TransferModel } from "../../models/transfer.model";

@Component({
  selector: "app-transfer",
  templateUrl: "./transfer.component.html",
  styleUrls: ["./transfer.component.scss"],
})
export class TransferComponent implements OnInit {
  public form = new TransferModel().FormTransfer();

  constructor() {}

  ngOnInit(): void {}

  enum(control: string): string {
    switch (control) {
      case "name":
        return "nombre";
      case "value":
        return "monto";
      case "receiver":
        return "Destino";
      default:
        break;
    }
  }

  messegeError(control: string): string {
    return `El campo ${this.enum(control)}, es requerido.`;
  }

  showMessegeError(controlName: string): boolean {
    return (
      this.form.get(controlName).invalid && this.form.get(controlName).touched
    );
  }
}
