import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{LoginService}  from './service/login.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Home1Component } from './component/home1/home1.component';
import { CustomerRegComponent } from './component/customer-reg/customer-reg.component';
import { BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceEngineerComponent } from './component/service-engineer/service-engineer.component';
  

@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,

    Home1Component,

<<<<<<< HEAD
    CustomerRegComponent,

    ServiceEngineerComponent
=======

>>>>>>> pratik
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
  
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
