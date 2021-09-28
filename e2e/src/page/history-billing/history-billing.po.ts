import { by, element } from 'protractor';

export class HistoryBillingPage {

    private messegeNotTransfer = element(by.id('show_no_transfers'));

    async showMessegeNotTransfer() {
        await this.messegeNotTransfer.getText();
    }

}
