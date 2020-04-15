import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner'
import { ChartService } from '../../../service/chart.service'
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { AppSettings } from '../../../app.settings'


@Component({
  selector: 'app-view-previous-complaint',
  templateUrl: './view-previous-complaint.component.html',
  styleUrls: ['./view-previous-complaint.component.css']
})
export class ViewPreviousComplaintComponent implements OnInit {
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
   
  }
  ngOnInit() {
    this.initializeItems()
  }
  getItems(ev: any) {
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.complaint = this.complaint.filter((item) => {
       if(parseInt(item.c_id) === parseInt(val)){
        return parseInt(item.c_id) === parseInt(val);
       }
        
      })
    }
    if(val.length === 0){
      this.initializeItems();       }
  }
  
  initializeItems() {
    this.charts.getAllComplaint().subscribe((result: any) => {
      this.complaint = result.data;
      this.complaint = this.complaint.filter((ele: any) => {
        AppSettings.status.forEach((e: any) => {
          if (parseInt(e.id) === parseInt(ele.c_status)) {
            ele.c_status = e.value;
          }
        });
        return ele
      })
    })
  }
}