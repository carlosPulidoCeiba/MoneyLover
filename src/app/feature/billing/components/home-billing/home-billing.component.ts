import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '@core/modelo/menu-item';
import { BillingService } from '../../shared/services/billing.service';

@Component({
  selector: 'app-home-billing',
  templateUrl: './home-billing.component.html',
  styleUrls: ['./home-billing.component.scss'],
})
export class HomeBillingComponent implements OnInit {

  public optionCard: MenuItem[] = [
    { url: '/billing/transfer', nombre: 'Transferir' },
    { url: '/billing/history', nombre: 'Historial' },
  ];

  public currentValue = 0;

  constructor(protected billingService: BillingService, private router: Router) { }

  ngOnInit(): void {
    this.getTransfers();
  }

  public getTransfers(): void {
    this.billingService.getTransfers().subscribe((res) => {
      const findCurrentUser = res.filter((register) => {
        return register.destino.toLowerCase() === 'carlos';
      });
      findCurrentUser.forEach((element) => {
        this.currentValue += element.monto;
      });
    });
  }

  transferToMe(): void {
    this.router.navigate(['billing/transfer'], {
      queryParams: { isToMe: true },
    });
  }
}
