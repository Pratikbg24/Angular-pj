import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{LoginService}  from './service/login.service';
import { NgxSpinnerModule} from 'ngx-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import{Data} from './data'
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Home1Component } from './component/home1/home1.component';
import { CustomerRegComponent } from './component/customer-reg/customer-reg.component';
import { BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceEngineerComponent } from './component/service-engineer/service-engineer.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { StatusCheckComponent } from './component/status-check/status-check.component';
import { ChartComponent } from './component/chart/chart.component';
import { CustomerDasboardComponent } from './component/customer/customer-dasboard/customer-dasboard.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
 import{ChartService} from './service/chart.service'; 
import { from } from 'rxjs';
import { AssignComplaintComponent } from './component/assign-complaint/assign-complaint.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    Home1Component,

    CustomerRegComponent,

    ServiceEngineerComponent,

    PageNotFoundComponent,

    StatusCheckComponent,

    ChartComponent,

    CustomerDasboardComponent,
    HeaderComponent,

    FooterComponent,

    AssignComplaintComponent,


  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    NgxSpinnerModule,
    AppRoutingModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
 
  ],
  providers: [
    LoginService,
    ChartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
