import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { LoadingSpinnerService } from '../../../service/loading-spinner.service'
import { ChartService } from '../../../service/chart.service'
import { NotificationServiceService } from 'src/app/service/NOTIFICATION-ALERT/notification-service.service';
import { AppSettings } from '../../../app.settings'

@Component({
  selector: 'app-cust-raise-complaint',
  templateUrl: './cust-raise-complaint.component.html',
  styleUrls: ['./cust-raise-complaint.component.css']
})
export class CustRaiseComplaintComponent implements OnInit {
  arr: FormArray
  formGroup: FormGroup
  submitted = false
  alert = false
  invalid: boolean
  confirmTextField: boolean;
  passwordTextField: boolean;
  enggList: Array<any> = [];
  priorityList: Array<any> = [];
  maxDate: Date;
  showSuccessMsg: boolean = false;
  showInvalidMsg: boolean = false;
  statusOpen: number[];
  statusClosed: number[];
  statusPending: number[];
  countData: any = {
    openCount: 0,
    closedCount: 0,
    pendingCount: 0
  };
  openCount1: number[];
  closedCount1: number[];
  pendingCount1: number[];
  complaint: any[];

  validation_messages = {

    'name': [
      { type: 'required', message: '*Please describe your issue here' },
      { type: 'minlength', message: '*The description must be above 3 character' }
    ],
    'priority': [
      { type: 'required', message: '*Choose the priority of the request'}
    ],
    'EngineerType': [
      { type: 'required', message: '*Please select engineer type' },
    ],
    'DateOfjoining': [
      {
        type: 'required', message: '*Please select date'
      }
    ],

  }

  constructor(private fb: FormBuilder,
    private charts: ChartService,
    private notificationservice: NotificationServiceService,
    private spinner: LoadingSpinnerService,
  ) {
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate() + 0);
    this.priorityList = [
      { key: 1, name: "1-Critical" },
      { key: 2, name: "2-High" },
      { key: 3, name: "3-Moderate" },
      { key: 4, name: "4-Low" },
      { key: 5, name: "5-Least" }
    ];
    this.enggList = [
      { key: 1, name: "Machanical" },
      { key: 2, name: "Electronic" },
      { key: 3, name: "Designing" }
    ];

  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      priority: ['', Validators.compose([
        Validators.required
      ])],
      EngineerType: ['', Validators.compose([
        Validators.required
      ])],
      DateOfjoining: ['', Validators.compose([
        Validators.required
      ])],
    })
    this.button1();

  }

  get f() {
    return this.formGroup.controls;
  }
  onSubmit(values: any) {

    this.charts.createComplaint(
      this.formGroup.value.name,
      this.formGroup.value.priority,
      this.formGroup.value.EngineerType,
      this.formGroup.value.DateOfjoining,
      "c_status",
      "c_assignBy"

    ).subscribe((result: any) => {
      if (result.status === "success") {
        this.spinner.show();
        this.button1();
        this.notificationservice.success("Raise Complaint successfully")
      } if (result.status === "error") {
        this.spinner.show();
        this.notificationservice.error(" Complaint not Raise")
      }
    })

    this.spinner.show();
    this.submitted = true;
    this.showSuccessMsg = false;
    this.showInvalidMsg = false;
    if (this.formGroup.invalid) {
      return;
    }
    this.formGroup.reset();
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
      this.button1()
    }
  }

  button1() {
    this.charts.getAllComplaint().subscribe((data: any) => {
      this.complaint = data.data.filter((el: any) => {
        if (el.c_assignBy == window.localStorage.getItem('id')) {
          if (parseInt(el.c_status) === 1) {
            this.statusOpen = data.data.filter((el: any) => {
              if (el.c_assignBy == window.localStorage.getItem('id')) {
                return el.c_status === 1
              }
            })
            this.countData.openCount = this.statusOpen.length;
            this.openCount1 = this.countData.openCount;
          }

          if (parseInt(el.c_status) === 2) {
            this.statusClosed = data.data.filter((el: any) => {
              if (el.c_assignBy == window.localStorage.getItem('id')) {
                return el.c_status === 2
              }
            })
            this.countData.closedCount = this.statusClosed.length;
            this.closedCount1 = this.countData.closedCount;
          }

          if (parseInt(el.c_status) === 3) {
            this.statusPending = data.data.filter((el: any) => {
              if (el.c_assignBy == window.localStorage.getItem('id')) {
                return el.c_status === 3
              }
            })
            this.countData.pendingCount = this.statusPending.length;
            this.pendingCount1 = this.countData.pendingCount;
          }
          return el;
        }
        
      })
      
    }
    )

  }
}

