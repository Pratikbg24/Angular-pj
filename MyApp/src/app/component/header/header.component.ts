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

  constructor(private spinner: LoadingSpinnerService) { }

  ngOnInit() {
  }
  customerReg() {
    this.spinner.show();

  }
  serviceEngg() {
    this.spinner.show();
  }


}
