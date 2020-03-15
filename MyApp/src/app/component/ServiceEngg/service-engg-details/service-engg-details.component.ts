import { Component, OnInit } from '@angular/core';
import { CustomerDetailServiceService } from '../../../service/customer-detail-service.service';

@Component({
  selector: 'app-service-engg-details',
  templateUrl: './service-engg-details.component.html',
  styleUrls: ['./service-engg-details.component.css']
})
export class ServiceEnggDetailsComponent implements OnInit {

  Engineers: any;
  u_name = "";
  date1: any;
  aa: boolean = false;
  constructor(private serviceEngg: CustomerDetailServiceService) {
    this.Engineers = [];
    this.date1 = [];
  }

  ngOnInit() {
    this.getAllServiceEngg();
  }
  getAllServiceEngg() {
    this.serviceEngg.getCustomer()
      .subscribe((data: any) => {
        this.Engineers = data.data.filter((el: any) => {
          return el.u_role === 3;
        })
      })
  }
  setIndex(ii: any) {
    this.aa = ii;
  }
}
