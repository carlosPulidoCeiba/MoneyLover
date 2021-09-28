import { by, element } from 'protractor';

export class TransferPage {

    private buttonSend = element(by.id('button_send'));
    private buttonBack = element(by.id('button_back'));
    private nombreInput = element(by.id('nombre_input'));
    private montoInput = element(by.id('monto_input'));
    private destinoInput = element(by.id('destino_input'));


    async clickSendTransfer() {
        await this.buttonSend.click();
    }

    async clickBack() {
        await this.buttonBack.click();
    }

    async escribirNombre(nombre: string) {
        await this.nombreInput.clear();
        await this.nombreInput.sendKeys(nombre);
    }

    async escribirMonto(monto: number) {
        await this.montoInput.clear();
        await this.montoInput.sendKeys(monto);
    }

    async escribirDestino(destino: string) {
        await this.destinoInput.clear();
        await this.destinoInput.sendKeys(destino);
    }
}
