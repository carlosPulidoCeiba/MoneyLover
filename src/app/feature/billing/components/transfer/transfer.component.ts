import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from '@shared/services/toast.service';
import * as moment from 'moment';
import { Transfer } from '../../shared/models/transfer.interface';
import { BillingService } from '../../shared/services/billing.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html'
})
export class TransferComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private router: Router,
    private toastService: ToastService,
    protected billingService: BillingService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    const currentDate = new Date();
    const dateFormat = moment(currentDate).format('DD-MMMM-YYYY');
    this.form = new FormGroup({
      fecha: new FormControl(dateFormat, [Validators.required, Validators.nullValidator]),
      nombre: new FormControl('', [Validators.required, Validators.nullValidator]),
      destino: new FormControl('', [Validators.required, Validators.nullValidator]),
      monto: new FormControl('', [Validators.required, Validators.nullValidator]),
    });
  }


  messegeError(control: string): string {
    return `El campo ${control}, es requerido.`;
  }

  goToBack(): void {
    this.router.navigate(['billing']);
  }

  showMessegeError(controlName: string): boolean {
    return (
      this.form.get(controlName).invalid && this.form.get(controlName).touched
    );
  }

  send(): void {
    if (this.form.valid) {
      this.postTransfer(this.form.value);
    }
  }

  postTransfer(data: Transfer): boolean {
    let success = true;
    this.billingService.transfer(data).subscribe(() => {
      this.toastService.toastSucces();
      this.goToBack();
    }, () => {
      success = false;
    });
    return success;
  }

}
