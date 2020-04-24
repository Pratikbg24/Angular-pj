import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { LoadingSpinnerService } from '../../../service/loading-spinner.service'
import { ChartService } from '../../../service/chart.service'

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
  maxDate: Date;
  showSuccessMsg: boolean = false;
  showInvalidMsg: boolean = false;

  validation_messages = {

    'name': [
      { type: 'required', message: '*Name is required' },
      { type: 'minlength', message: '*Name must be 3 character' }
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
    private spinner: LoadingSpinnerService,
  ) {
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate() + 0);
    this.enggList = [
      {key:1, name: "Machanical" },
      {key:2, name: "Electronic" },
      {key:3, name: "Designing" }
    ]

  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      EngineerType: ['', Validators.compose([
        Validators.required
      ])],
      DateOfjoining: ['', Validators.compose([
        Validators.required
      ])],
    })
  }

  get f() {
    return this.formGroup.controls;
  }
  onSubmit(values: any) {
    
    this.charts.createComplaint(


      this.formGroup.value.name, 
      this.formGroup.value.EngineerType,      
      this.formGroup.value.DateOfjoining,
      "c_status",
      "c_assignBy"

    ).subscribe((result: any) => {
      if(result.status === "success"){
        this.showSuccessMsg=true;
       }if(result.status === "error"){
       // console.log(result.message)
        this.showInvalidMsg=true;  
       }      

    })
       
    this.spinner.show();
    this.submitted = true;
    this.showSuccessMsg=false;
    this.showInvalidMsg=false;
    if (this.formGroup.invalid) {
      return;
    }
    this.formGroup.reset();
  }
}


