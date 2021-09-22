import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { Transfer } from '../models/transfer.interface';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  public baseUrl = environment.apiMock;

  constructor(protected httpService: HttpService) { }

  transfer(data: Transfer): Observable<Transfer> {
    const url = this.baseUrl + 'transfers';
    return this.httpService.doPost(url, data);
  }

  getTransfers():Observable<Transfer[]> {
    const url = this.baseUrl + 'transfers';
    return this.httpService.doGet(url);
  }

  deleteTransfer(id: number): Observable<Transfer> {
    const url = `${this.baseUrl}transfers/${id}`;
    return this.httpService.doDelete(url);
  }
}
