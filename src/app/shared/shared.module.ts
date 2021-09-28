import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ErrorFieldComponent } from './components/error-field/error-field.component';

@NgModule({
  declarations: [
    ErrorFieldComponent
  ],
  imports: [ReactiveFormsModule, FormsModule],
  exports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ErrorFieldComponent
  ]
})
export class SharedModule { }
