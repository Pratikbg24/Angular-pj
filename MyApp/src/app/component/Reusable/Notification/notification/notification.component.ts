import { Component, OnInit } from '@angular/core';
import { ChartService} from '../../../../service/chart.service'
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
  constructor(private getcomplaint:ChartService) { }

  ngOnInit() {
    $('.toast') .toast('hide');
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
    this.showMyContainer=!this.showMyContainer
  }
    carddissmiss(){
      $('.toast') .toast('hide');
    }
}
