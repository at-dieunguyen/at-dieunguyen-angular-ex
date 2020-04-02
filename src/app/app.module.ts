import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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
import { RouterModule, Router } from '@angular/router'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormRegisterComponent,
    FormReactiveComponent,
    HomeComponent,
    NewComponent,
  ],
  imports: [
    BrowserModule,

    FormsModule,
    ReactiveFormsModule,
    RouterModule,Router
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
