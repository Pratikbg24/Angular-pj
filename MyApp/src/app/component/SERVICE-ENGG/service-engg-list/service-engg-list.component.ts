import { Component, OnInit, Inject } from '@angular/core';
import { UpdateServiceService } from 'src/app/service/update-service.service';
//import { ConfirmDialogserviceService } from 'src/app/service/CONFIRM-DIALOG/confirm-dialogservice.service';
import { NotificationServiceService } from 'src/app/service/NOTIFICATION-ALERT/notification-service.service';
import { LoadingSpinnerService } from '../../../service/loading-spinner.service'
declare var $: any
@Component({
  selector: 'app-service-engg-list',
  templateUrl: './service-engg-list.component.html',
  styleUrls: ['./service-engg-list.component.css']
})
export class ServiceEnggListComponent implements OnInit {

  serviceEnggData: any;
  DataList: any
  u_email = "";
  u_id: any
  constructor(private updateservice: UpdateServiceService,
    private confirmdialogservice: ConfirmDialogserviceService,
    private notificationservice: NotificationServiceService,
    private spinner: LoadingSpinnerService) {
    this.serviceEnggData = [];
  }

  ngOnInit() {
    this.getAllServiceEngg();
    // this.getEngineerType();
  }
  getAllServiceEngg() {
    this.updateservice.getList().subscribe((data: any) => {
      this.serviceEnggData = data.data.filter((el: any) => {
        return el.u_role === 3;
      });
      this.u_id = data.data.filter((el: any) => {
        return el.u_id
      })
    })
  }
  delete(item: any) {
    let data = {
      "u_id": this.u_id
    }
    this.updateservice.deleteItem(data).subscribe((result: any) => {
      if (result.status === "success") {
        this.notificationservice.warning("Record has been successfully deleted")
        this.getAllServiceEngg()
      } else {
        this.notificationservice.error("The record cannot be deleted")
      }
    })
    console.log('Agree clicked');
    this.spinner.show();
  }
  openModal(item: any) {
    this.u_id = item.u_id
    $("#deleteModal").modal('show');
  }
  editServiceEngg() {
    this.spinner.show();
  }
}