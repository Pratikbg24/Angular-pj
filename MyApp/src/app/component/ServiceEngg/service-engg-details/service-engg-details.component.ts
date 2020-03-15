import { Component, OnInit } from '@angular/core';
import { CustomerDetailServiceService } from '../../../service/customer-detail-service.service';

@Component({
  selector: 'app-service-engg-details',
  templateUrl: './service-engg-details.component.html',
  styleUrls: ['./service-engg-details.component.css']
})
export class ServiceEnggDetailsComponent implements OnInit {
  initializeItems: any;
  Engineers: any;
  serviceEng = "";
  aa: boolean = false;
  constructor(private serviceEngg: CustomerDetailServiceService) {
    this.Engineers = [];
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
  search() {
    debugger
    if (this.serviceEng != "") {
      
      
       
      this.Engineers = this.Engineers.filter((ele,i,res: any) => {
       /*  
        let arrElmt= ele.u_name.toLocaleLowerCase()
        return arrElmt.includes(this.serviceEng)
      */
        let arrElmt1= ele.u_email.toLocaleLowerCase()
        return arrElmt1.includes(this.serviceEng)
     
      })
    }  
    
    else if (this.serviceEng == "") {
      this.ngOnInit();
    }
  }
}
