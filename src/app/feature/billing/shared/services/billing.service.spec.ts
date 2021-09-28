import { HttpResponse } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { HttpService } from "@core/services/http.service";
import { environment } from "@env/environment";
import { Transfer } from "../models/transfer.interface";
import { Transferencia } from "../models/transfer.model";
import { BillingService } from "./billing.service"



describe('BillingService', () => {

    let service: BillingService;
    let serviceMock: HttpTestingController;

    beforeEach(() => {
        const injector = TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [BillingService, HttpService]
        });
        serviceMock = injector.inject(HttpTestingController);
        service = TestBed.inject(BillingService);
    });


    it('Debe crearse', () => {
        expect(service).toBeTruthy();
    });


    it('Debe generar una transferencia', () => {
        const dummyTransferencia = new Transferencia({
            destino: 'Jose Manuel',
            fecha: '25-September-2021',
            monto: 50000,
            id: 0,
            nombre: 'Cristian David'
        });

        service.transfer(dummyTransferencia).subscribe(
            res => {
                expect(res).toEqual(true);
            }
        );
        const req = serviceMock.expectOne(`${environment.apiMock}transfers`);
        expect(req.request.method).toBe('POST');
        req.event(new HttpResponse<boolean>({ body: true }));
    })

    it('Debe traer las trasnferencias', () => {
        const lengthTransfers = 1;
        const dummyTransfers: Transfer[] = [
            new Transferencia(
                {
                    destino: 'Jose Manuel',
                    fecha: '25-September-2021',
                    monto: 50000,
                    id: 0,
                    nombre: 'Cristian David'
                }
            )
        ];
        service.getTransfers().subscribe(productos => {
            expect(productos.length).toBe(lengthTransfers);
            expect(productos).toEqual(dummyTransfers);
        });
        const req = serviceMock.expectOne(`${environment.apiMock}transfers`);
        expect(req.request.method).toBe('GET');
        req.flush(dummyTransfers);
    });

    it('Debe eliminar una transferencia', () => {
        const dummyIdTransferencia = 1;

        service.deleteTransfer(dummyIdTransferencia).subscribe(
            res => {
                expect(res).toEqual(1);
            }
        );
        const req = serviceMock.expectOne(`${environment.apiMock}transfers/${dummyIdTransferencia}`);
        expect(req.request.method).toBe('DELETE');
        req.event(new HttpResponse<number>({ body: 1 }));
    })


})