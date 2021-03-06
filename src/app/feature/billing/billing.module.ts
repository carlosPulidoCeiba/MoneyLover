import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingRoutingModule } from './billing-routing.module';
import { HomeBillingComponent } from './components/home-billing/home-billing.component';
import { HistoryBillingComponent } from './components/history-billing/history-billing.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { SharedModule } from '@shared/shared.module';
import { BillingService } from './shared/services/billing.service';


@NgModule({
  declarations: [
    HomeBillingComponent,
    HistoryBillingComponent,
    TransferComponent
  ],
  imports: [
    CommonModule,
    BillingRoutingModule,
    SharedModule
  ],
  providers: [BillingService]
})
export class BillingModule { }
