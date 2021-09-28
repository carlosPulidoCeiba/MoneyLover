import { AppPage } from '../app.po';
import { HomeBillingPage } from '../page/home-billing/home-billing.po';
import { NavbarPage } from '../page/navbar/navbar.po';


describe('Inicio de las transferencias', () => {
    let page: AppPage;
    let homeBilling: HomeBillingPage;
    let navBar: NavbarPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        homeBilling = new HomeBillingPage();
    });

    it('Debe mostrar dos rutas', () => {
        page.navigateTo();
        navBar.clickBotonBilling();
        expect(2).toBe(homeBilling.countCardRoutes());
    });
});
