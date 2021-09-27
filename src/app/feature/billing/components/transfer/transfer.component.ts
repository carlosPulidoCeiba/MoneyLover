import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '@shared/services/toast.service';
import * as moment from 'moment';
import { Transfer } from '../../shared/models/transfer.interface';
import { BillingService } from '../../shared/services/billing.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html'
})
export class TransferComponent implements OnInit {

  public isToMe = false;
  public form: FormGroup;

  constructor(
    private router: Router,
    private toastService: ToastService,
    protected billingService: BillingService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.activeRoute.queryParams.subscribe(
      params => {
        ({ isToMe: this.isToMe } = params);
        if (this.isToMe) {
          this.configIsToMe();
        }
      }
    );
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

  configIsToMe(): void {
    this.form.get('nombre').disable();
    this.form.get('destino').disable();
    this.form.patchValue({
      nombre: 'Carlos',
      destino: 'Carlos'
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
      const formValueIsToMe = {
        ...this.form.value,
        nombre: 'Carlos',
        destino: 'Carlos'
      };
      const data = this.isToMe ? formValueIsToMe : this.form.value;
      this.postTransfer(data);
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
