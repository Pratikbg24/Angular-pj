import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner'
import { ChartService } from '../../service/chart.service'
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { user } from 'src/app/user.module';

@Component({
  selector: 'app-assign-complaint',
  templateUrl: './assign-complaint.component.html',
  styleUrls: ['./assign-complaint.component.css']
})
/* 
@Output() searchcriteria = new EventEmitter<String>();
searchThis() {
    this.searchcriteria.emit(this.searchword)
} */

export class AssignComplaintComponent implements OnInit {

  arr: FormArray
  formGroup: FormGroup
  submitted = false
  alert = false
  invalid: boolean
  serviceEnggData: any = {
    engg_Id: null,
    engg_Name: null,
    eng_EMail: null,
  }
  engg_Id: [];
  engg_Name: [];
  eng_EMail: [];
  DataList: any
  u_email = "";

  pageTitle = 'Assign Complaints';

  complaint: any[];
  c_id: any[];
  Machine_type: any = {
    u_Machinepurchesed: null,

  }

  c_date: [];

  searchText;
  searchText1;
  machinType: [];
  data = [

  ]
  showSuccessMsg: boolean = false;
  showInvalidMsg: boolean = false;


  constructor(private route: ActivatedRoute,
    private router: Router,
    private charts: ChartService,
    private spinner: NgxSpinnerService,
    private httpCilent: HttpClient) {
    this.serviceEnggData = [];
  }

  ngOnInit() {

    this.getAllServiceEngg();

    this.charts.getComplaintData().subscribe((data: any) => {
      this.complaint = data.data.filter((el: any) => {
        this.charts.getMachineType().subscribe((result: any) => {
          this.machinType = result.data;
          this.machinType.forEach((ell: any) => {
            if (el.Machine_type === ell.id) {
              el.Machine_type = ell.Value;
            }
          })
        })
        return el.c_desc
      })
      this.c_id = data.data.filter((el: any) => {
        return el.c_id
      })
      this.c_date = data.data.filter((el: any) => {
        return el.c_date
      })
      // this.Machine_type = data.data.filter((el: any) => {
      //   return el.Machine_type == 1
      // })





      this.Machine_type.u_Machinepurchesed = this.Machine_type.u_Machinepurchesed;



    }


    )
    /* 
    this.charts.getComplaintData().subscribe((data: any) => {
 
      this.charts.getMachineType().subscribe((result: any) => {
          this.machinType = result.data;
          this.machinType.forEach((ell: any) => {
            if (el.Machine_type === ell.id) {
              el.Machine_type = ell.Value;
            }
          })
       
    }) */
  }
  assignengg(user: any) {
 
    
    let id=this.c_id[0].c_id;
    let data = {
      status: 3,
      complaintId:id,
      assignTo: user.u_id,
    }
    this.charts.assignComplaint(data).subscribe((result: any) => {
     
      console.log(data)
      if (result.status === "success") {
        this.showSuccessMsg = true;
      } if (result.status === "error") {
        console.log(result.message)
        this.showInvalidMsg = true;
      }
    })

  }
  getAllServiceEngg() {
    this.charts.getList().subscribe((data: any) => {
      this.serviceEnggData = data.data.filter((el: any) => {
        return el.u_role === 3;

      })
    })



  }
  getEngg(ev: any) {
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.serviceEnggData = this.serviceEnggData.filter((item) => {
        return parseInt(item.u_id) === parseInt(val) || (item.u_email.toLowerCase().indexOf(val.toLowerCase())) > -1 ||
          (item.u_name.toLowerCase().indexOf(val.toLowerCase())) > -1
        })
    } 
    if (val.length === 0) {
      this.getAllServiceEngg();
    }
  }

}