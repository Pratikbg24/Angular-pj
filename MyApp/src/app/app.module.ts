import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{LoginService}  from './service/login.service';
import { NgxSpinnerModule} from 'ngx-spinner';
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
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { StatusCheckComponent } from './component/status-check/status-check.component';
import { ChartComponent } from './component/chart/chart.component';
import { CustomerDasboardComponent } from './component/customer/customer-dasboard/customer-dasboard.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoadingSpinnerService} from './service/loading-spinner.service'
import { CustomerRegService} from './service/customer-reg.service'
import { from } from 'rxjs';
import { CustomerDetailComponent } from './component/customer-detail/customer-detail.component';
import {CustomerDetailServiceService} from './service/customer-detail-service.service';
import { UpdateCustomerComponent } from './component/customer/update-customer/update-customer.component';
import { SearchPipePipe } from './pipes/search-pipe.pipe';
import { ServiceEnggDetailsComponent } from './component/ServiceEngg/service-engg-details/service-engg-details.component';
import { UpdateServiceEnggComponent } from './component/ServiceEngg/update-service-engg/update-service-engg.component';
import { CustomerListComponent } from './component/CUSTOMERS/customer-list/customer-list.component';
import { CustomerEditComponent } from './component/CUSTOMERS/customer-edit/customer-edit.component';
  

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

    CustomerDetailComponent,

    UpdateCustomerComponent,

    SearchPipePipe,

    ServiceEnggDetailsComponent,

    UpdateServiceEnggComponent,

    CustomerListComponent,

    CustomerEditComponent,


  



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
    LoadingSpinnerService,
    CustomerRegService,
    CustomerDetailServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
