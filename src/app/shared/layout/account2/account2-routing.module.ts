import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Account2Component } from './account2.component';


const routes: Routes = [
  {
    path: '',
    component: Account2Component,
    children: [
      {
        path: 'profile2',
        loadChildren: () => import('./profile2/profile2.module').then(m => m.Profile2Module)
      },
      {
        path: 'dashboard2',
        loadChildren: () => import('./dashboard2/dashboard2.module').then(m => m.Dashboard2Module)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Account2RoutingModule { }
