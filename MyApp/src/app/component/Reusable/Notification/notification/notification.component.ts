import { Component, OnInit } from '@angular/core';
import { ChartService} from '../../../../service/chart.service';
import { NotificationServiceService} from '../../../../service/NOTIFICATION-ALERT/notification-service.service'
import { from } from 'rxjs';
declare var $:any
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  showMyContainer: boolean = false;
  Opencomplaint:any
  countData:any={
    openCount:0,
  };
  openCount1:any
  constructor(private getcomplaint:ChartService,
    private alert1:NotificationServiceService) { }

  ngOnInit() {
    this.initializeItems()
  }
  initializeItems() {
    this.getcomplaint.getAllComplaint().subscribe((result: any) => {
      this.Opencomplaint = result.data;
      this.Opencomplaint = this.Opencomplaint.filter((ele: any) => {
      return ele.c_status ===1
      })
      this.countData.openCount=this.Opencomplaint.length;
      this.openCount1=this.countData.openCount
    })
  }
  notification(){
    this.showMyContainer=!this.showMyContainer    
    if(this.openCount1 > 0){
      $('.toast') .toast('show');
    }
    else{
      $('.toast') .toast('hide');
      this.alert1.warning("No new notification")
    }
  }
    carddissmiss(){
      this.showMyContainer=!this.showMyContainer
      $('.toast') .toast('hide');
    }
}
