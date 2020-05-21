import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner'
import { ChartService } from '../../service/chart.service'
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { NotificationServiceService } from 'src/app/service/NOTIFICATION-ALERT/notification-service.service';
declare var $: any;
@Component({
  selector: 'app-assign-complaint',
  templateUrl: './assign-complaint.component.html',
  styleUrls: ['./assign-complaint.component.css']
})
export class AssignComplaintComponent implements OnInit {

  arr: FormArray
  formGroup: FormGroup
  submitted = false
  alert = false
  invalid: boolean
  serviceEnggData: any = 
  {
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
  complaint_id:any;
  Machine_type: any = 
  {
    u_Machinepurchesed: null,
  }
  c_date: [];
  searchText;
  searchText1;
  machinType: [];
  data = []
  showSuccessMsg: boolean = false;
  showInvalidMsg: boolean = false;
  hoverow: boolean=false;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private charts: ChartService,
    private spinner: NgxSpinnerService,
    private notificationservice: NotificationServiceService,
    private httpCilent: HttpClient,
    private ActivactedRoute:ActivatedRoute) {
    this.serviceEnggData = [];
  }
  ngOnInit() {
    this.getAllServiceEngg();
    this.complaintInitialize()
    this.complaint_id = this.ActivactedRoute.snapshot.params["c_id"];
    console.log(this.complaint_id)
    if(this.complaint_id === this.c_id){
      $(".test").css("background-color","red");
      // $("tr").css("background-color", "#F4F4F8");
    }
    
  }
  
  complaintInitialize(){
    this.complaint = [];
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
        return el.c_status === 1
      })
      this.c_id = data.data.filter((el: any) => {
        return el.c_id
      })
      this.c_date = data.data.filter((el: any) => {
        return el.c_date
      })
      this.Machine_type.u_Machinepurchesed = this.Machine_type.u_Machinepurchesed;
    });
  }
  
  assignEngg(user: any) {
  
    let data = {
      status: 3,
      complaintId:this.c_id,
      assignTo: user.u_id,
    }
    this.charts.assignComplaint(data).subscribe((result: any) => {
      if (result.status === "success") {
        this.notificationservice.success("Assign Complaint successfully")
        this.complaintInitialize()
      } if (result.status === "error") {
        this.notificationservice.error(" Complaint not Assigned")
        this.complaintInitialize()
      }    })
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

  openModal(item: any){
    this.c_id = item.c_id;
    $("#customerModal").modal('show');
  }
}