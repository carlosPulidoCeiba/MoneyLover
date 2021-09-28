import { by, element } from 'protractor';

export class HomeBillingPage {

    private cardsRoute = element(by.id('options_card'));
    private redirectoTransfe = element(by.id('recargar'));

    async countCardRoutes() {
        await this.cardsRoute.count();
    }

    async clickRedirectoTransfer() {
        await this.redirectoTransfe.click();
    }
}
