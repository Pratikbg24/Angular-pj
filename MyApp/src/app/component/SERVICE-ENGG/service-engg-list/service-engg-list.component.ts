import { Component, OnInit,Inject } from '@angular/core';
import { UpdateServiceService } from 'src/app/service/update-service.service';
import { ConfirmDialogserviceService } from 'src/app/service/CONFIRM-DIALOG/confirm-dialogservice.service';
import { UpdateData } from 'src/app/models/update-data';
import { NotificationServiceService } from '../../../service/NOTIFICATION-ALERT/notification-service.service'
@Component({
  selector: 'app-service-engg-list',
  templateUrl: './service-engg-list.component.html',
  styleUrls: ['./service-engg-list.component.css']
})
export class ServiceEnggListComponent implements OnInit {

  serviceEnggData: any;
  DataList: any
  u_email = "";
  u_id: UpdateData
  constructor(private updateservice: UpdateServiceService,
    private confirmdialogservice: ConfirmDialogserviceService,
    private noficationservice: NotificationServiceService) {
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
      })
    })
  }
  delete(item: any) {
    this.confirmdialogservice.openConfirmDialog('Are you sure to delete this record ?')
      .afterClosed().subscribe(res => {
        if (res) {
          this.updateservice.deleteItem(item.u_id).subscribe((result: any) => {
            if (result.status === "success") {
              //alert(" !Record has been successfully deleted")
              this.noficationservice.warn('! Record has been successfully deleted');
              console.log(this.noficationservice.warn('! Record has been successfully deleted'));
              this.getAllServiceEngg()
            } else {
              this.noficationservice.warn('! Record can not deleted');
              console.log(this.noficationservice.warn('! Record can not  deleted'));            }
          })
          console.log('Agree clicked');
        }
      })
  }
  // getEngineerType(){
  //   this.updateservice.machineType().subscribe((data:any)=>{
  //     this.serviceEnggData=data;
  //   })
  // }

}
