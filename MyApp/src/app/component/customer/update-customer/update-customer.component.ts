import { Component, OnInit } from '@angular/core';
import { UpdateServiceService} from '../../../service/update-service.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  customersData: any;
  UpdateData:any
  u_email="";
  
  constructor(private updateservice:UpdateServiceService) {
    this.customersData = [];
   }

   ngOnInit() {
    this.getAllCustomers();
   
  }
 
  getAllCustomers() {
    //Get saved list of Customers
    this.updateservice.getList().subscribe((data:any) => {
      this.customersData = data.data.filter((el:any) =>{
         return el.u_role === 1;
       })
      //console.log(response);
      //this.customersData = data;
    })
  }
 
 
 
  delete(item) {
    //Delete item in Customer data
    this.updateservice.deleteItem(item.u_id).subscribe(Response => {
      //Update list after delete is successful
        console.log(Response)
      this.getAllCustomers();
    });
  }
}