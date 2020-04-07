import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Account2RoutingModule } from './account2-routing.module';
import { Account2Component } from './account2.component';


@NgModule({
  declarations: [Account2Component],
  imports: [
    CommonModule,
    Account2RoutingModule
  ]
})
export class Account2Module { }
