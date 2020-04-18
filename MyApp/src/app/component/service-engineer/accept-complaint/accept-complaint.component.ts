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
        /* if (el.c_assignTo === this.navParams.get("user_id")) {
          if (el.c_status === 3 || el.c_status === 1) {
            return el;
          }
        };  */
      });
    });
  }

  openModal(item:any){
    //this.c_id=item.c_id;
    $("#customerModal").modal('show');
  }
 

}