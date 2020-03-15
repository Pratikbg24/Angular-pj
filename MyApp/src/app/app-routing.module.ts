import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home1Component } from './component/home1/home1.component';
import { LoginComponent } from './component/login/login.component';
import { ServiceEngineerComponent } from './component/service-engineer/service-engineer.component';
import { CustomerRegComponent} from './component/customer-reg/customer-reg.component';
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';
import { ChartComponent } from "./component/chart/chart.component"
import { CustomerDetailComponent } from './component/customer-detail/customer-detail.component';
import { UpdateCustomerComponent } from './component/customer/update-customer/update-customer.component';
import { ServiceEnggDetailsComponent } from './component/ServiceEngg/service-engg-details/service-engg-details.component'
import {  UpdateServiceEnggComponent} from './component/ServiceEngg/update-service-engg/update-service-engg.component';
const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'home1',
    component:Home1Component,
    children:[
      {
        path:'',
        component:ChartComponent
        
      },
        {
          path:'createserviceEngineer',
          component:ServiceEngineerComponent,
          
        },
        {
          path:'updateserviceEngineer',
          component:UpdateServiceEnggComponent,
        },
        {
          path:'serviceEnggDetails',
          component:ServiceEnggDetailsComponent,
        },
        {
          path:'createcustomer',
          component:CustomerRegComponent,
          
        },
        {
          path:'customerdetail',
          component:CustomerDetailComponent
        },
        {
          path:'updatecustomer',
          component:UpdateCustomerComponent
        }        
       ]
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }, 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
