import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

export class TransferModel {
  formTransfer() {
    const currentDate = new Date();
    const dateFormat = moment(currentDate).format('DD-MMMM-YYYY');
    return new FormGroup({
      date: new FormControl(dateFormat, {
        validators: [Validators.required, Validators.nullValidator],
      }),
      name: new FormControl('', {
        validators: [Validators.required, Validators.nullValidator],
      }),
      receiver: new FormControl('', {
        validators: [Validators.required, Validators.nullValidator],
      }),
      value: new FormControl('', {
        validators: [Validators.required, Validators.nullValidator],
      }),
    });
  }
}
