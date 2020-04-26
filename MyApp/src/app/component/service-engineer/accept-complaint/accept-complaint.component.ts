import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner'
import { ChartService } from '../../../service/chart.service'
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { AppSettings } from '../../../app.settings'
import{user} from '../../../user.module'
declare var $: any;

@Component({
  selector: 'app-accept-complaint',
  templateUrl: './accept-complaint.component.html',
  styleUrls: ['./accept-complaint.component.css']
})
export class AcceptComplaintComponent implements OnInit {
 
  assignData={}
  filterData = {
    c_id:"",
    c_assignBy: "",
    c_name: "",
    u_mobile:"",
    u_altermobile:"",
    e_desc:"",
    u_email:"",
    c_status:""
  };
  enggData = {};
  complaintData = [];

 
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
  pageTitle = 'All Complaints';

  complaint: any[];
  c_id: any[];
  Machine_type: any = {
    u_Machinepurchesed: null,

  }
  Machinelist: Array<any> = [];
 
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

      this.Machinelist = [
        { name: "Pending" },
        { name: "Close" },
      ];
     
   
  }
  ngOnInit() {
    this.initializeItems()
  
   // this.filterData = this.navParams.get('ObjData');
    this.charts.getCustomerDetails(this.filterData.c_assignBy).subscribe((result:any) => {
      this.filterData.c_name = result.data.u_name;
      this.filterData.u_mobile=result.data.u_mobile;
      this.filterData.u_altermobile=result.data.u_altermobile;
      this.filterData.u_email=result.data.u_email;
      this.filterData.e_desc=result.data.e_desc;
    })
  }
  getItems(ev: any) {
    // set val to the value of the searchbar
    const val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.complaint = this.complaint.filter((item) => {
       if(parseInt(item.c_id) === parseInt(val)){
        return parseInt(item.c_id) === parseInt(val);
       }
        
      })
    }
    if(val.length === 0){
      this.initializeItems();   // Reset items back to all of the items
    }
  }

  initializeItems(){
    this.charts.getAllComplaint().subscribe((data: any) => {
      this.complaint = data.data.filter(el => {
        if (el.c_assignTo === 2122) {
          if (el.c_status === 3 || el.c_status === 1) {
            return el;
          }
        }; 
      });
    });
  }


  addData(){
    let data={
      status:parseInt(this.filterData.c_status),
      complaintId:this.filterData.c_id,
      e_desc:this.filterData.e_desc
    }
    this.charts.updateComplaint(data).subscribe((result:any)=>{
      if(result.status === "success"){
        window.alert("Sucess")  
      
      }
    })
    console.log("UserData"+JSON.stringify(this.filterData))
  }

 
  openModal(item:any){
    console.log(item)
    this.c_id=item.c_id;
    this.c_date=item.c_date;
    this.assignData = item;
    $("#customerModal").modal('show');
  }

}