import { AppPage } from '../app.po';
import { HistoryBillingPage } from '../page/history-billing/history-billing.po';
import { NavbarPage } from '../page/navbar/navbar.po';


describe('Lista de las transferencias', () => {
    let page: AppPage;
    let historyBillingPage: HistoryBillingPage;
    let navBar: NavbarPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        historyBillingPage = new HistoryBillingPage();
    });

    it('Debe mostrar mensaje de no transferencias', () => {
        page.navigateTo();
        navBar.clickBotonBilling();
        expect(historyBillingPage.showMessegeNotTransfer()).toBe('No existen transferencias realizadas');
    });
});
