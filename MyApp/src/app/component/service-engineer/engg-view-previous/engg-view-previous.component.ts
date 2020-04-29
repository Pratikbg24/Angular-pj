import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner'
import { ChartService } from '../../../service/chart.service'
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { AppSettings } from '../../../app.settings'
import {GetuidService}  from '../../../service/getuid.service'


@Component({
  selector: 'app-engg-view-previous',
  templateUrl: './engg-view-previous.component.html',
  styleUrls: ['./engg-view-previous.component.css']
})
export class EnggViewPreviousComponent implements OnInit {
  

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
   this.initializeItems();
  }
 
  initializeItems(){
    this.charts.getAllComplaint().subscribe((data: any) => {
      console.log(JSON.stringify(data));
      this.complaint = data.data.filter((el:any) => {
        if (el.c_assignTo == window.localStorage.getItem('id')) {
          if (el.c_status === 2) {
            return el;
          }
        };
      });
      console.log(JSON.stringify(this.complaint));
    });

 }
}
