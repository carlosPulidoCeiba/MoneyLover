import { Component, OnInit } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';

@Component({
  selector: 'app-home-billing',
  templateUrl: './home-billing.component.html',
  styleUrls: ['./home-billing.component.scss']
})
export class HomeBillingComponent implements OnInit {

  public optionCard: MenuItem[] = [
    { url: "/billing/transfer", nombre: "Transferir" },
    { url: "/billing/history", nombre: "Historial" }
  ];

  public currentValue = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
