import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner'
import { ChartService } from '../../service/chart.service'
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { AppSettings } from '../../app.settings'
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker'
import { NotificationServiceService } from 'src/app/service/NOTIFICATION-ALERT/notification-service.service';
import { filter } from 'rxjs/operators';
import { SearchPipe1Pipe } from 'src/app/pipes/search-pipe1.pipe';
declare var $: any;

@Component({
  selector: 'app-view-all-complaints',
  templateUrl: './view-all-complaints.component.html',
  styleUrls: ['./view-all-complaints.component.css']
})
export class ViewAllComplaintsComponent implements OnInit {
  c_status: string;
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
  Machinelist: Array<any> = [];
  maxDate: Date;

  pageTitle = 'All Complaints';

  complaint: any[];
  c_id: any[];
  Machine_type: any = {
    u_Machinepurchesed: null,

  }
  filterData: any[];
  value: any
  //complaint;
  complaintData;

  c_date: [];

  searchText;
  searchText1;
  machinType: [];
  data = [

  ]
  showSuccessMsg: boolean = false;
  showInvalidMsg: boolean = false;

  validation_messages = {
    'Datepurchased': [
      {
        type: 'required', message: '*Please select date'
      }
    ],
    'email': [
      { type: 'required', message: '*Email is required' },
      { type: 'pattern', message: '*Enter valid email' }
    ],

  }
  options = ['Open', 'Close', 'Pending']

  selected;
  selectedData;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private charts: ChartService,
    private fb: FormBuilder,
    private notificationservice: NotificationServiceService,
    private dpconfig: BsDatepickerConfig,
    private spinner: NgxSpinnerService,
    private httpCilent: HttpClient) {
    this.dpconfig.dateInputFormat = 'DD-MM-YYYY';
    this.dpconfig.isAnimated = true;
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate() + 0)
    this.Machinelist = [
      { name: "Open" },
      { name: "Pending" },
      { name: "Close" },
    ];

  }
  ngOnInit() {
    this.initializeItems()
    this.formGroup = this.fb.group({
      Datepurchased: ['', Validators.compose([
        Validators.required
      ])],
      Datepurchased1: ['', Validators.compose([
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern("[a-z_A-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z_A-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z_A-Z0-9](?:[a-z_A-Z0-9-]*[a-z_A-Z0-9])?\.)+[a-z_A-Z0-9](?:[a-z_A-Z0-9-]*[a-z_A-Z0-9])?")
      ])],

    })

  }
  getItems(ev: any) {
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.complaint = this.complaint.filter((item) => {
        if (parseInt(item.c_id) === parseInt(val)) {
          return parseInt(item.c_id) === parseInt(val);
        }
      })
    }
    if (val.length === 0) {
      this.initializeItems();
    }
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
      this.selectedData = this.complaint;
    })
  }

  onSelect(val) {
    console.log(val);
    let start_date = new Date(this.formGroup.value.Datepurchased).toLocaleDateString()
    let end_date = new Date(this.formGroup.value.Datepurchased1).toLocaleDateString()
    let dd = this.formGroup.value.options
    console.log(dd)
    this.selectedData = this.complaint.filter((el) => {
  //     return 
     return (((start_date) <= (new Date(el.c_date).toLocaleDateString()) )&& ((end_date) >= (new Date(el.c_date).toLocaleDateString())) &&  (el.c_status == val) )
    })
    console.log(this.selectedData)
  }
  excelToMail() {
    this.charts.downloadAllComplait(
      this.formGroup.value.email,
      this.selectedData
    ).subscribe((result: any) => {
      if (result.status === "success") {
        this.notificationservice.success(" Mail Send  successfully")
        this.initializeItems();

      } if (result.status === "error") {
        this.notificationservice.error("Mail not Send !!!")
        this.initializeItems();
      }
    })
    this.spinner.show();
    this.submitted = true;

  }
  openModal(item: any) {
    $("#myModal").modal('show');
  }
}
