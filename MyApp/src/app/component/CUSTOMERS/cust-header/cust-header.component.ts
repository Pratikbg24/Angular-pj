import { Component, OnInit, Input } from '@angular/core';
import { LoadingSpinnerService } from '../../../service/loading-spinner.service'
import { ChartService } from '../../../service/chart.service'
import { NotificationServiceService } from 'src/app/service/NOTIFICATION-ALERT/notification-service.service';
import { AppSettings } from '../../../app.settings'


@Component({
  selector: 'app-cust-header',
  templateUrl: './cust-header.component.html',
  styleUrls: ['./cust-header.component.css']
})
export class CustHeaderComponent implements OnInit {

  activeButton;
  complaint: any[];
  @Input() openCount1: number[];

  constructor(private spinner: LoadingSpinnerService,
              private charts: ChartService,
              private notificationservice: NotificationServiceService) { }


 loader(event) {
    this.spinner.show();
    this.activeButton=event;
  }
  showButton(event){
    this.spinner.show();
    this.activeButton = event;
  }

  ondisplay(){
    
  }

  ngOnInit() {
    // this.initializeItems();
   }
  
}

