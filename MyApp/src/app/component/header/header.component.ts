import { Component, OnInit } from '@angular/core';
import { LoadingSpinnerService } from '../../service/loading-spinner.service'
import { from } from 'rxjs';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    activeButton
  constructor(private spinner: LoadingSpinnerService) { }

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
  showButton(event){
    this.spinner.show();
    this.activeButton = event;
  }


}
