import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home1Component } from './component/home1/home1.component';
import{ LoginComponent } from './component/login/login.component';
import { ServiceEngineerComponent } from './component/service-engineer/service-engineer.component';
import { CustomerRegComponent} from './component/customer-reg/customer-reg.component';
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';
const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'home1',
    children:[
      {
        path:'',
        component:Home1Component,
      },
        {
          path:'home1/createserviceEngineer',
          component:ServiceEngineerComponent
        },
        {
          path:'home1/createcustomer',
          component:CustomerRegComponent
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
