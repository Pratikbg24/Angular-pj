import { Component, OnInit } from '@angular/core';
import { CustomerDetailServiceService } from '../../service/customer-detail-service.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

   Customers:any;
    u_email="";
    date1:any;
    aa:boolean=false;
  constructor(private customerservice: CustomerDetailServiceService) { 
    this.Customers=[];
    this.date1=[];
   }

  ngOnInit() {
    this.getAllCustomer();
  }
  getAllCustomer() {
    this.customerservice.getCustomer()
      .subscribe((data: any) => {
        this.Customers = data.data.filter((el: any) => {
          return el.u_role === 1;
        })

        this.date1  =data.data.filter((el:any)=>{
          return el.u_dataOf_Purchased       
         })
         let x=   this.date1;
       
         let allDate= []
         this.date1.forEach((x: number) => {

         let jsdate =new Date(x*1000)
         allDate.push(jsdate.toLocaleDateString('en',{year:'numeric',month:'short',day:'numeric'}))           
         });
         console.log(allDate)
       


    })//s
  }
    setIndex(ii:any){
      this.aa=ii;
        }
}
