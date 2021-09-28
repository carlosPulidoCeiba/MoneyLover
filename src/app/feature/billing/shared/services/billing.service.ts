import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { Transfer } from '../models/transfer.interface';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  constructor(protected httpService: HttpService) { }

  transfer(data: Transfer): Observable<boolean> {
    const url = environment.apiMock + 'transfers';
    return this.httpService.doPost(url, data);
  }

  getTransfers(): Observable<Transfer[]> {
    const url = environment.apiMock + 'transfers';
    return this.httpService.doGet(url);
  }

  deleteTransfer(id: number): Observable<number> {
    const url = `${environment.apiMock}transfers/${id}`;
    return this.httpService.doDelete(url);
  }
}
