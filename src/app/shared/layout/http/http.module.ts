import { NgModule } from '@angular/core';

import { HttpRoutingModule } from './http-routing.module';
import { HttpComponent } from './http.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    HttpComponent
  ],
  imports: [
    CommonModule,
    HttpRoutingModule
  ],
  providers: [],
  bootstrap: [HttpComponent]
})
export class HttpModule { }
