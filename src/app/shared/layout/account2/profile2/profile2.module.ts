import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Profile2RoutingModule } from './profile2-routing.module';
import { Profile2Component } from './profile2.component';


@NgModule({
  declarations: [Profile2Component],
  imports: [
    CommonModule,
    Profile2RoutingModule
  ]
})
export class Profile2Module { }
