import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{LoginService}  from './service/login.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Home1Component } from './component/home1/home1.component';
// import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
// import { NgxSpinnerModule } from "ngx-spinner";
  

@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,

    Home1Component,


  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
  
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
