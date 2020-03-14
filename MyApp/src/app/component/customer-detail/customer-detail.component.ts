import { Component, OnInit } from '@angular/core';
import { CustomerDetailServiceService} from '../../service/customer-detail-service.service'
import{ ICustomer} from '../../component/customers-details'

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

    Customers : ICustomer[];
    
  constructor( private customerservice:CustomerDetailServiceService)  { }

  ngOnInit() {
      this.customerservice.getCustomer()
      .subscribe((data:any) =>{
      this.Customers=data.data.filter((el:any)=>{
        return el.u_role===1
      })        
    })
  }
  }
