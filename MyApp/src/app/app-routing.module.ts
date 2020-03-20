import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home1Component } from './component/home1/home1.component';
import { LoginComponent } from './component/login/login.component';
import { ServiceEngineerComponent } from './component/service-engineer/service-engineer.component';
import { CustomerRegComponent } from './component/customer-reg/customer-reg.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { ChartComponent } from "./component/chart/chart.component"
//import { CustomerDetailComponent } from './component/customer-detail/customer-detail.component';
import { UpdateCustomerComponent } from './component/customer/update-customer/update-customer.component';
import { UpdateServiceEnggComponent } from './component/ServiceEngg/update-service-engg/update-service-engg.component';
import { CustomerListComponent } from './component/CUSTOMERS/customer-list/customer-list.component';
import { CustomerEditComponent } from './component/CUSTOMERS/customer-edit/customer-edit.component';
import { ServiceEnggListComponent } from './component/SERVICE-ENGG/service-engg-list/service-engg-list.component';
import { ServiceEnggEditComponent } from './component/SERVICE-ENGG/service-engg-edit/service-engg-edit.component';
import { ViewCustomerComponent } from './component/CUSTOMERS/view-customer/view-customer.component';
import { ViewServiceEngineerComponent } from './component/SERVICE-ENGG/view-service-engineer/view-service-engineer.component';
import { AssignComplaintComponent } from './component/assign-complaint/assign-complaint.component';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
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
        path: 'app-assign-complaint',
        component: AssignComplaintComponent,

      },
      {
        path:'app-assign-complaint/view/:id',
        component: AssignComplaintComponent
      },
      
      {
        path: 'createserviceEngineer',
        component: ServiceEngineerComponent,

      },

      {
        path: 'serviceEngglist',
        component: UpdateServiceEnggComponent,
      },
      {
        path:'serviceEngglist/view/:id',
        component:ViewServiceEngineerComponent
      },
      {
        path: 'createcustomer',
        component: CustomerRegComponent,
      },
      {
        path:'updateCustomer1/edit/:id', 
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
          path:'customerdetails/view/:id',
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
