import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NewComponent } from './shared/layout/new/new.component';
import { HomeComponent } from './shared/layout/home/home.component';
import { AccountComponent } from './shared/layout/account/account.component';
import { DashboardComponent } from './shared/layout/dashboard/dashboard.component';
import { ProfileComponent } from './shared/layout/profile/profile.component';
import { AccountGuard } from './shared/layout/account/account.guard';
import { LoginComponent } from './shared/layout/login/login.component';
import { CanDeactivateProfile } from './shared/layout/profile/profile.candeactive';
import { ProfileResolver } from './shared/layout/profile/profile.resolve';
import { Account2Component } from './shared/layout/account2/account2.component';
import { AccountGuard2 } from './shared/layout/account2/account2.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'new',
    component: NewComponent,
  },
  // {
  //   path: 'account',
  //   component: AccountComponent,
    // canActivate: [AccountGuard],
    // canActivateChild: [AccountGuard],
    // children: [{
    //   path: 'dashboard',
    //   component: DashboardComponent
    // },
    // {
    //   path: 'profile',
    //   component: ProfileComponent,
    //   canDeactivate: [CanDeactivateProfile],
    //   resolve: {
    //     userData: ProfileResolver
    //   }
    // }]
  // },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'account2',
    canActivate: [AccountGuard2],
    loadChildren: () => import('./shared/layout/account2/account2.module').then(m => m.Account2Module)
  },
  {
    path: 'http',
    loadChildren: () => import('./shared/layout/http/http.module').then(m => m.HttpModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
