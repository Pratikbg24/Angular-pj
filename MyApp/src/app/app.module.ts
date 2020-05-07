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
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoadingSpinnerService} from './service/loading-spinner.service'
import { CustomerRegService} from './service/customer-reg.service'
import { UpdateCustomerComponent } from './component/customer/update-customer/update-customer.component';
import { SearchPipePipe } from './pipes/search-pipe.pipe';
import { UpdateServiceEnggComponent } from './component/ServiceEngg/update-service-engg/update-service-engg.component';
import { CustomerListComponent } from './component/CUSTOMERS/customer-list/customer-list.component';
import { CustomerEditComponent } from './component/CUSTOMERS/customer-edit/customer-edit.component';
import { ServiceEnggListComponent } from './component/SERVICE-ENGG/service-engg-list/service-engg-list.component';
import { ServiceEnggEditComponent } from './component/SERVICE-ENGG/service-engg-edit/service-engg-edit.component';
import { ViewCustomerComponent } from './component/CUSTOMERS/view-customer/view-customer.component';
import { ViewServiceEngineerComponent } from './component/SERVICE-ENGG/view-service-engineer/view-service-engineer.component';
import { UpdateServiceService } from '../../../../Angular-pj/MyApp/src/app/service/update-service.service';
import { CustHeaderComponent } from './component/CUSTOMERS/cust-header/cust-header.component';
import { CustFooterComponent } from './component/CUSTOMERS/cust-footer/cust-footer.component';
import { CustHomeComponent } from './component/CUSTOMERS/cust-home/cust-home.component';
import { CustRaiseComplaintComponent } from './component/CUSTOMERS/cust-raise-complaint/cust-raise-complaint.component';
import { PopupModalComponent } from './component/popup-modal/popup-modal.component';
import { ViewAllComplaintsComponent } from './component/view-all-complaints/view-all-complaints.component';
import { ViewPreviousComplaintComponent } from './component/CUSTOMERS/view-previous-complaint/view-previous-complaint.component';
import { EnggHomeComponent } from './component/service-engineer/engg-home/engg-home.component';
import { EnggHeaderComponent } from './component/service-engineer/engg-header/engg-header.component';
import { EnggFooterComponent } from './component/service-engineer/engg-footer/engg-footer.component';
import { AcceptComplaintComponent } from './component/service-engineer/accept-complaint/accept-complaint.component';
import { EnggViewPreviousComponent } from './component/service-engineer/engg-view-previous/engg-view-previous.component';
   
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


    UpdateCustomerComponent,

    SearchPipePipe,
  
    UpdateServiceEnggComponent,

    CustomerListComponent,

    CustomerEditComponent,

    ServiceEnggListComponent,

    ServiceEnggEditComponent,

    ViewCustomerComponent,

    ViewServiceEngineerComponent,

    CustHeaderComponent,

    CustFooterComponent,

    CustHomeComponent,

    CustRaiseComplaintComponent,

    PopupModalComponent,

    ViewAllComplaintsComponent,

    ViewPreviousComplaintComponent,

    EnggHomeComponent,

    EnggHeaderComponent,

    EnggFooterComponent,

    AcceptComplaintComponent,

    EnggViewPreviousComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    BrowserModule,
    NgxSpinnerModule,
    AppRoutingModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
  ],
  providers: [
    LoginService,
    ChartService,
    LoadingSpinnerService,
    CustomerRegService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
