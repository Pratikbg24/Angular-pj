import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { UpdateServiceService } from '../../../service/update-service.service'
import {  LoadingSpinnerService } from'../../../service/loading-spinner.service'
import { format } from 'url';
import { from } from 'rxjs';
@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {
  u_id: any;
  Viewcustomers:any
  // data:any[]=Viewcustomers
  constructor(private activatedrouter: ActivatedRoute,
    private updateservice: UpdateServiceService,
    private spinner:LoadingSpinnerService,
    private router:Router) {
    this.Viewcustomers = [];
  }
  ngOnInit() {
    this.viewCustomer()
  }
  viewCustomer() {
    // console.log(this.activatedrouter.snapshot.params.u_id)
    this.u_id = this.activatedrouter.snapshot.params["u_id"];
    this.updateservice.getItem(this.u_id).subscribe((result: any) => {
      // console.log(result)
      this.Viewcustomers = result.data
      // console.log(this.Viewcustomers)
    });
    // console.log(this.u_id)
  }
  back(){
    this.spinner.show()
    this.router.navigate(['/home1/customerdetails'])
  }
}
