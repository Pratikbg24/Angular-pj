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
  serviceEngg(event) {
    this.spinner.show();
    this.activeButton=event;
  }
  showButton(event){
    this.spinner.show();
    this.activeButton = event;
  }


}
