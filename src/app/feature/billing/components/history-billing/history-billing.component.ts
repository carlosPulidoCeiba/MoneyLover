import { Component, OnInit } from '@angular/core';
import { ToastService } from '@shared/services/toast.service';
import { Transfer } from '../../models/transfer.interface';
import { BillingService } from '../../services/billing.service';

@Component({
  selector: 'app-history-billing',
  templateUrl: './history-billing.component.html',
  styleUrls: ['./history-billing.component.scss'],
})
export class HistoryBillingComponent implements OnInit {
  public transfers: Transfer[] = [];

  constructor(
    protected billingService: BillingService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.getTransfers();
  }

  getTransfers(): void {
    this.billingService.getTransfers().subscribe((res) => {
      this.transfers = res;
    });
  }

  confirmDelete(id: number): void {
    this.toastService.toastConfirmDelete().then((result) => {
      if( result.isConfirmed) {
        this.deleteRegister(id);
      }
    });
  }

  deleteRegister(id: number): void {
    this.billingService.deleteTransfer(id).subscribe(
      () => {
        this.getTransfers();
        this.toastService.toastDeleteSucces();
      }
    );
  }
}
