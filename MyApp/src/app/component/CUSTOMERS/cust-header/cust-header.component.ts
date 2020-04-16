import { Component, OnInit } from '@angular/core';
import { LoadingSpinnerService } from '../../../service/loading-spinner.service'
import { from } from 'rxjs';
import { LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-cust-header',
  templateUrl: './cust-header.component.html',
  styleUrls: ['./cust-header.component.css']
})
export class CustHeaderComponent implements OnInit {

  activeButton
  constructor(private spinner: LoadingSpinnerService) { }

  ngOnInit() {
  }
  
 loader(event) {
    this.spinner.show();
    this.activeButton=event;
  }
  showButton(event){
    this.spinner.show();
    this.activeButton = event;
  }

}

