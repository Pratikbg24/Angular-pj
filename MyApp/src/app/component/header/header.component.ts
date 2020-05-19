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
  constructor(private spinner: LoadingSpinnerService) {
   }
  ngOnInit() {
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