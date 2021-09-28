import { AppPage } from '../app.po';
import { HomeBillingPage } from '../page/home-billing/home-billing.po';
import { NavbarPage } from '../page/navbar/navbar.po';
import { TransferPage } from '../page/transfer/transfer.po';


describe('Transferencia', () => {
    let page: AppPage;
    let transfer: TransferPage;
    let navBar: NavbarPage;
    let homePage: HomeBillingPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        transfer = new TransferPage();
        homePage = new HomeBillingPage();

    });

    it('Boton deshabilitado, formulario invalido', async () => {

        const nombre = 'Fernando';
        const monto = 30000;
        const destino = 'Carlos';

        await page.navigateTo();
        await navBar.clickBotonBilling();
        await homePage.clickRedirectoTransfer();

        await transfer.escribirNombre(nombre);
        await transfer.escribirMonto(monto);
        await transfer.escribirDestino(destino);
        transfer.clickSendTransfer();

        expect(2).toBe(homePage.countCardRoutes());
    });
});
