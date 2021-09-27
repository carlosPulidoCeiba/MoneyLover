import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpService } from './services/http.service';
import { ManejadorError } from './interceptor/manejador-error';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ToolbarComponent, NavbarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ToolbarComponent, NavbarComponent],
  providers: [
    HttpService,
    { provide: ErrorHandler, useClass: ManejadorError }
  ]
})
export class CoreModule { }
