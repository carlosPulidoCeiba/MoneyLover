import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryBillingComponent } from './components/history-billing/history-billing.component';
import { HomeBillingComponent } from './components/home-billing/home-billing.component';
import { TransferComponent } from './components/transfer/transfer.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeBillingComponent,
      },
      {
        path: 'history',
        component: HistoryBillingComponent,
      },
      {
        path: 'transfer',
        component: TransferComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillingRoutingModule {}
