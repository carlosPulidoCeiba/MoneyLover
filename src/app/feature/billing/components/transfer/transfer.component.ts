import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '@shared/services/toast.service';
import { TransferModel } from '../../models/transfer.model';
import { BillingService } from '../../services/billing.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html'
})
export class TransferComponent implements OnInit {

  public isToMe = false;
  public form = new TransferModel().formTransfer();

  constructor(
    private router: Router,
    private toastService: ToastService,
    protected billingService: BillingService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(
      params => {
        ({ isToMe: this.isToMe } = params);
        if (this.isToMe) {
          this.configIsToMe();
        }
      }
    )
  }

  configIsToMe(): void {
    this.form.get('name').disable();
    this.form.get('receiver').disable();
    this.form.patchValue({
      name: 'Carlos',
      receiver: 'Carlos'
    });
  }

  enum(control: string): string {
    switch (control) {
      case 'name':
        return 'nombre';
      case 'value':
        return 'monto';
      case 'receiver':
        return 'destino';
      default:
        break;
    }
  }

  messegeError(control: string): string {
    return `El campo ${this.enum(control)}, es requerido.`;
  }

  goToBack(): void {
    this.router.navigate(['billing']);
  }

  showMessegeError(controlName: string): boolean {
    return (
      this.form.get(controlName).invalid && this.form.get(controlName).touched
    );
  }

  send() {
    if (this.form.valid) {
      const formValueIsToMe = {
        ...this.form.value,
        name: 'Carlos',
        receiver: 'Carlos'
      };
      const data = this.isToMe ? formValueIsToMe : this.form.value;
      this.billingService.transfer(data).subscribe(() => {
        this.toastService.toastSucces();
        this.goToBack();
      });
    }
  }
}
