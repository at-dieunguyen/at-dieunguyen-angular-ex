import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Profile2Component } from './profile2.component';


const routes: Routes = [
  {
    path: '',
    component: Profile2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Profile2RoutingModule { }
