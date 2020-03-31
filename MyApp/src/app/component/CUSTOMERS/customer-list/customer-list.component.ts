import { Component, OnInit } from '@angular/core';
import { UpdateServiceService } from '../../../service/update-service.service';
import { UpdateData } from '../../../models/update-data';
import { ConfirmDialogserviceService } from 'src/app/service/CONFIRM-DIALOG/confirm-dialogservice.service';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customersData: any;
  UpdateData: any
  u_email = "";
  u_id: UpdateData
  alert = false

  constructor(private updateservice: UpdateServiceService,
    private confirmdialogservice: ConfirmDialogserviceService) {
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
    })
  }
  delete(item) {
    this.updateservice.deleteItem(item.u_id).subscribe((result: any) => {
      if (result.status === "success") {
        alert("Record has been successfully deleted!")
        // this.alert=true;
        this.getAllCustomers()
      }
      else {
        alert(" Cannot delete !")
      }
    })
    console.log('Agree clicked');
  }
}