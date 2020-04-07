import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { FormRegisterComponent } from './shared/layout/form-register/form-register.component';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { FormReactiveComponent } from './shared/layout/form-reactive/form-reactive.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './shared/layout/home/home.component';
import { NewComponent } from './shared/layout/new/new.component';
import { AccountComponent } from './shared/layout/account/account.component';
import { DashboardComponent } from './shared/layout/dashboard/dashboard.component';
import { ProfileComponent } from './shared/layout/profile/profile.component';
import { LoginComponent } from './shared/layout/login/login.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormRegisterComponent,
    FormReactiveComponent,
    HomeComponent,
    NewComponent,
    AccountComponent,
    DashboardComponent,
    ProfileComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
