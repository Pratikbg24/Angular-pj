import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { UpdateServiceService } from '../../../service/update-service.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BsModalService } from 'ngx-bootstrap/modal' 
import { from } from 'rxjs';
import { NotificationServiceService } from 'src/app/service/NOTIFICATION-ALERT/notification-service.service';
import { LoadingSpinnerService } from 'src/app/service/loading-spinner.service';
declare var $: any;
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  public bsmodalRef:BsModalRef;
  customersData: any;
  u_email = "";
  u_id:any;
  alert = false;  
  constructor(private updateservice: UpdateServiceService,
    private notificationalert:NotificationServiceService,
    private spinner:LoadingSpinnerService) {
    this.customersData = [];
  }
  ngOnInit() {
    this.getAllCustomers();
  }  
  getAllCustomers() {
    //Get saved list of Customers
    this.updateservice.getList().subscribe((data: any) => {
      this.customersData = data.data.filter((el: any) => {
        return el.u_role === 1;
      })
      this.u_id =data.data.filter((el:any)=>{
        return el.u_id 
      })
    })
  }
  
  delete(item) {
    let data={
      "u_id":this.u_id
    }   
      this.updateservice.deleteItem(data).subscribe((result: any) => {
      if (result.status === "success") {
        this.notificationalert.warning("Record Deleted Successfully")
        this.getAllCustomers()
      }
      else {
        alert(" Cannot delete !")
      }
    })
    console.log('Agree clicked');
    this.spinner.show();
  }
  openModal(item:any){
    this.u_id = item.u_id
  $("#deleteModal").modal('show');
  }
  customerEdit(){
    this.spinner.show();
  }

}