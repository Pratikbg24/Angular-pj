import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home1Component } from './component/home1/home1.component';
import{ LoginComponent } from './component/login/login.component';
import { ServiceEngineerComponent } from './component/service-engineer/service-engineer.component';

const routes: Routes = [
  {
    path:'home1',
    component:Home1Component,
    children:[
      {
        path:'serviceEngineer12',
        component:ServiceEngineerComponent
        }
       ]
  },
  {
    path:'',
    component:LoginComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
