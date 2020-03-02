import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home1Component } from './component/home1/home1.component';
import{ LoginComponent } from './component/login/login.component';



const routes: Routes = [
  {
    path:'home1',
    component:Home1Component
  },
  {
    path:'',
    component:LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
