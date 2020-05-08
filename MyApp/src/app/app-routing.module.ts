import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home1Component } from './component/home1/home1.component';
import { LoginComponent } from './component/login/login.component';
import { ServiceEngineerComponent } from './component/service-engineer/service-engineer.component';
import { CustomerRegComponent } from './component/customer-reg/customer-reg.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { ChartComponent } from "./component/chart/chart.component"
import { UpdateCustomerComponent } from './component/customer/update-customer/update-customer.component';
import { UpdateServiceEnggComponent } from './component/ServiceEngg/update-service-engg/update-service-engg.component';
import { CustomerListComponent } from './component/CUSTOMERS/customer-list/customer-list.component';
import { CustomerEditComponent } from './component/CUSTOMERS/customer-edit/customer-edit.component';
import { ServiceEnggListComponent } from './component/SERVICE-ENGG/service-engg-list/service-engg-list.component';
import { ServiceEnggEditComponent } from './component/SERVICE-ENGG/service-engg-edit/service-engg-edit.component';
import { ViewCustomerComponent } from './component/CUSTOMERS/view-customer/view-customer.component';
import { ViewServiceEngineerComponent } from './component/SERVICE-ENGG/view-service-engineer/view-service-engineer.component';
import{AssignComplaintComponent} from './component/assign-complaint/assign-complaint.component'
import{ViewAllComplaintsComponent}from './component/view-all-complaints/view-all-complaints.component'
import{CustHomeComponent} from './component/CUSTOMERS/cust-home/cust-home.component'
import{CustRaiseComplaintComponent} from './component/CUSTOMERS/cust-raise-complaint/cust-raise-complaint.component'
import{ViewPreviousComplaintComponent} from './component/CUSTOMERS/view-previous-complaint/view-previous-complaint.component'
import {EnggHomeComponent} from './component/service-engineer/engg-home/engg-home.component'
import{AcceptComplaintComponent} from './component/service-engineer/accept-complaint/accept-complaint.component'
import { EnggViewPreviousComponent } from './component/service-engineer/engg-view-previous/engg-view-previous.component';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
      path:'app-cust-home',
      component:CustHomeComponent,
      children: [
        {
          path:'app-cust-raise-complaint',
          component: CustRaiseComplaintComponent,
  
        },
        {
          path: 'app-view-previous-complaint',
          component: ViewPreviousComplaintComponent,
  
        },
      ]
  },
  {
    path:'app-engg-home',
    component:EnggHomeComponent,
    children: [
      {
        path:  'app-accept-complaint',
        component: AcceptComplaintComponent,

      },
      {
        path: 'app-engg-view-previous',
        component: EnggViewPreviousComponent,
      },
    ]
},
  {
    path: 'home1',
    component: Home1Component,
    children: [
      {
        path: '',
        component: ChartComponent

      },
      {
        path: 'createserviceEngineer',
        component: ServiceEngineerComponent,

      },
      {
      path: 'app-view-all-complaints',
      component:ViewAllComplaintsComponent,  
      },
      {
        path: 'app-assign-complaint',
        component: AssignComplaintComponent,
      },
      {
        path: 'serviceEngglist',
        component: UpdateServiceEnggComponent,
      },
      {
        path:'updateserviceEngineer/view/:u_id',
        component:ViewServiceEngineerComponent
      },
      {
        path: 'createcustomer',
        component: CustomerRegComponent,
      },
      {
        path:'updateCustomer1/edit/:u_id', 
        component: CustomerEditComponent        
      },
      {
        path:'updateCustomer1',
        component:CustomerListComponent
        },
      {
        path: 'customerdetails',
        component: UpdateCustomerComponent
      },
      {
          path:'updateCustomer1/view/:u_id',
          component:ViewCustomerComponent
      },
      {
        path :'updateserviceEngineer',
        component:ServiceEnggListComponent
      },
      {
        path:'updateserviceEngineer/edit/:u_id',
        component:ServiceEnggEditComponent
      }
    ]
  },
    {
    path: '**',
    component: PageNotFoundComponent
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }