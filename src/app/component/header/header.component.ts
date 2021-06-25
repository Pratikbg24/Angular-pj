import { Component, OnInit, Input } from '@angular/core';
import { LoadingSpinnerService } from '../../service/loading-spinner.service'
import { ChartService}from '../../service/chart.service'
import { NotificationServiceService}from '../../service/NOTIFICATION-ALERT/notification-service.service'
declare var $:any
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   activeButton
   alert=false;
   Opencomplaint:any[];
   countData:any={
    openCount:0,
  };
  openCount1:number[];
  constructor(private spinner: LoadingSpinnerService,
    private getcomplaint:ChartService,
    private notify:NotificationServiceService) {
   }
  ngOnInit() {
    this.initializeItems()
  }
  initializeItems() {
    this.getcomplaint.getAllComplaint().subscribe((result: any) => {
      this.Opencomplaint = result.data;
      this.Opencomplaint = this.Opencomplaint.filter((ele: any) => {
      return ele.c_status ===1
      })
      console.log(this.Opencomplaint);
      this.countData.openCount=this.Opencomplaint.length;
      this.openCount1=this.countData.openCount
    })
  }
    notification(){
      $('.toast') .toast('show');
      $('.toast').toast({
        'autohide': true,
        'delay':10000
      });
        // $('.toast').toast('hide'); 

      // $('#myHideBtn').toast('hide');

     // this.notify.success(this.Opencomplaint)
    }

  createCustomer(event) {
    this.spinner.show();
    this.activeButton=event;
  }
  updateCustomer(){
    this.spinner.show();
  }
  customerDetails(){
    this.spinner.show();
  }
  serviceEngg(event) {
    this.spinner.show();
    this.activeButton=event;
  }
  serviceEnggDetail(){
    this.spinner.show();
  }
  serviceEnggUpdate(){
    this.spinner.show();
  }
  assign_complaint(){
    this.spinner.show();
  }
  showButton(event){
    this.spinner.show();
    this.activeButton = event;
  }
}