import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-billing',
  templateUrl: './history-billing.component.html',
  styleUrls: ['./history-billing.component.scss']
})
export class HistoryBillingComponent implements OnInit {

  public data = [
    {
      date: '1',
      name: 'd',
      receiver: 'daa',
      value: 'asd'
    },
    {
      date: '2',
      name: '123ad',
      receiver: 'adzxc',
      value: 'zczxc'
    },
    {
      date: '3',
      name: 'adad',
      receiver: 'asd',
      value: 'asdzc'
    },
    {
      date: '4',
      name: 'adsad',
      receiver: 'asdasd',
      value: 'asda'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
