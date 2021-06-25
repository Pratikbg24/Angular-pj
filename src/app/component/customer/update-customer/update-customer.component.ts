import { Component, OnInit } from '@angular/core';
import { UpdateServiceService} from '../../../service/update-service.service';
import {LoadingSpinnerService } from '../../../service/loading-spinner.service'

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  customersData: any;
  UpdateData:any
  u_email="";
  
  constructor(private updateservice:UpdateServiceService,
    private spinnerService:LoadingSpinnerService) {
    this.customersData = [];
   }
   ngOnInit() {
    this.getAllCustomers(); 
  }
  getAllCustomers() {
    this.updateservice.getList().subscribe((data:any) => {
      this.customersData = data.data.filter((el:any) =>{
         return el.u_role === 1;
       })
    })
  }
  delete(item) {
    this.updateservice.deleteItem(item.u_id).subscribe(Response => {
        console.log(Response)
      this.getAllCustomers();
    });
  }
  spinner(){
    this.spinnerService.show();
  }
}