
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { LoadingSpinnerService } from '../../../service/loading-spinner.service'
import { ActivatedRoute, Router, Params } from '@angular/router';
import { UpdateData } from '../../../models/update-data';
import { UpdateServiceService } from '../../../service/update-service.service'
import { DatePipe } from '@angular/common'
import { from } from 'rxjs';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { NotificationServiceService } from 'src/app/service/NOTIFICATION-ALERT/notification-service.service';
@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  arr: FormArray
  formGroup: FormGroup
  submitted = false
  alert = false
  invalid: boolean
  passwordfieldTextType: boolean;
  confirmfieldTextType: boolean;
  Machinelist: Array<any> = [];
  servicePeriod: Array<any> = [];
  warrentyperiod: Array<any> = [];
  u_id: any;
  data4: any;
  maxDate: any;
  customerdata = new UpdateData();
  validation_messages = {
    'u_name': [
      { type: 'required', message: '*Name is required' },
      { type: 'minlength', message: '*Name must be 3 character' }
    ],
    'Mobilenumber': [
      { type: 'required', message: '*Mobile Number is Required' },
      { type: 'maxlength', message: '*Mobile number maximum length should be only 10 number' },
      { type: 'pattern', message: '*Enter valid mobile number' },
      { type: 'minlength', message: '*Mobile number minumum lenght 10 number' }
    ],
    'Alternatemobile': [
      { type: 'maxlength', message: '*Maximum length 10 number' },
      { type: 'pattern', message: '*Enter valid mobile number' },
      { type: 'minlength', message: '*Minumum lenght 10 number' }
    ],
    'email': [
      { type: 'pattern', message: '*Enter valid email' }
    ],
    'password': [
      { type: 'required', message: '*Password is required' },
      { type: 'minlength', message: '*Password minumum length 6 Character.' }
    ],
    'Address': [
      { type: 'required', message: '*Address is required' },
    ],
    'Machine_purchase': [
      { type: 'required', message: '*Please select any one machine' },
    ],
    'machieCondition': [
      { type: 'required', message: '*Please select purchase type' }
    ],
    'Note': [
      { type: 'required', message: '*Note is required' },
    ],
    'Machineno': [
      { type: 'required', message: '*Machine Number is required' }
    ],
    'servicePeriod': [
      { type: 'required', message: '*Please select service period month' },
    ],
    'warrentPeriod': [
      { type: 'required', message: '*Please select warrenty period month' },
    ],
    'Datepurchased': [
      {
        type: 'required', message: '*Please select date'
      }
    ],
    'confirmPassword': [
      { type: 'required', message: '*Password required' },
      { type: 'minlength', message: '*Password minumum length 6 character.' }
    ]
  }  
  constructor(private fb: FormBuilder,
    private spinner: LoadingSpinnerService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private updateservice: UpdateServiceService,
    private dpconfig: BsDatepickerConfig,
    private notificationservice: NotificationServiceService
  ) {
    this.dpconfig.dateInputFormat = 'YYYY-MM-DD';
    this.dpconfig.isAnimated = true;
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate() + 0);
    this.Machinelist = [
      { name: "Computerised Embroidery Machines" },
      { name: "Reconditioned Barudan Embroidery Machines" },
      { name: "Circular Knitting Machines" },
      { name: "Flat Knitting Machines" },
      { name: "Chain Stitch Machines" },
      { name: "Laser Cutting Machines" },
      { name: "Dual Sequence Cording Machines" },
      { name: "Cap Knitting Machines" },
      { name: "Coller Knitting Machines" }
    ];
    this.servicePeriod = [
      { month: '1' },
      { month: '2' },
      { month: '3' },
      { month: '4' },
      { month: '5' },
      { month: '6' },
      { month: '7' },
      { month: '8' },
      { month: '9' },
      { month: '10' },
      { month: '11' },
      { month: '12' }
    ];
    this.warrentyperiod = [
      { totalmonth: '1' },
      { totalmonth: '2' },
      { totalmonth: '3' },
      { totalmonth: '4' },
      { totalmonth: '5' },
      { totalmonth: '6' },
      { totalmonth: '7' },
      { totalmonth: '8' },
      { totalmonth: '9' },
      { totalmonth: '10' },
      { totalmonth: '11' },
      { totalmonth: '12' }
    ]
  }
  ngOnInit() {
    this.viewCustomer();
    this.formGroup = this.fb.group({
      u_name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      Mobilenumber: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern('^[0-9]{10}$'),
        Validators.minLength(10)
      ])],
      Alternatemobile: ['', Validators.compose([
        Validators.maxLength(10),
        Validators.pattern('^[0-9]{10}$'),
        Validators.minLength(10)
      ])],
      email: [{ value: '', disabled: true }, Validators.compose([
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ])],
      Address: [{ value: '', disabled: true }, Validators.compose([
        Validators.required
      ])],
      Machine_purchase: [{ value: '', disabled: true }, Validators.compose([
        Validators.required
      ])],
      machieCondition: [{ value: '', disabled: true },Validators.compose([ Validators.required
      ])],
      Note: [{ value: '', disabled: true }, Validators.compose([
        Validators.required
      ])],
      Machineno: [{ value: '', disabled: true }, Validators.compose([
        Validators.required
      ])],
      servicePeriod: [{ value: '', disabled: true }, Validators.compose([
        Validators.required
      ])],
      warrentPeriod: [{ value: '', disabled: true }, Validators.compose([
        Validators.required
      ])],
      Datepurchased: [{ value: '', disabled: true }, Validators.compose([
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6),
      ])],
      confirmPassword: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])]
    },
      {
        validators: this.passwordConfirming.bind(this)
      });
  }
  passwordConfirming(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmPassword');
    if (password === confirmPassword) {
      this.alert = true
    }
    else {
      this.alert = false
      return { invalid: true };
    }
  }
  get f() {
    return this.formGroup.controls;
  }
    viewCustomer() {
    this.u_id = this.activatedRoute.snapshot.params["u_id"];
    this.updateservice.getItem(this.u_id).subscribe((result: any) => {
      this.formGroup.patchValue({
        u_name: result.data[0].u_name,
        Mobilenumber: result.data[0].u_mobile,
        Alternatemobile: result.data[0].u_altermobile,
        email: result.data[0].u_email,
        Address: result.data[0].u_address,
        Machine_purchase: result.data[0].u_MachinePurchased,
        machieCondition:result.data[0].u_purchase_con,
        Note: result.data[0].u_note,
        Machineno: result.data[0].u_MachineNo,
        servicePeriod: result.data[0].u_ServicePeriod,
        warrentPeriod: result.data[0].u_WarrentyPeriod,
        Datepurchased: result.data[0].u_dateOf_Purchased,
        password: result.data[0].u_password,
        confirmPassword: result.data[0].u_cpassword,
      })
      this.data4 = result
      this.customerdata = this.data4;
    })
  }
  onSubmit(formValue: any) {
    let payload = {
      "u_id" : this.activatedRoute.snapshot.params["u_id"],
      "u_name": formValue.u_name,
      "u_mobile": formValue.Mobilenumber,
      "u_altermobile": formValue.Alternatemobile,
      "u_email": formValue.email,
      "u_address": formValue.Address,
      "u_MachinePurchased": formValue.Machine_purchase,
      "u_purchase_con":formValue.machieCondition,
      "u_note": formValue.Note,
      "u_MachineNo": formValue.Machineno,
      "u_ServicePeriod": formValue.servicePeriod,
      "u_WarrentyPeriod": formValue.warrentPeriod,
      "u_dateOf_Purchased": formValue.Datepurchased,
      "u_password": formValue.password,
      "u_cpassword": formValue.confirmPassword
    }
    this.updateservice.updateItem(payload).subscribe((result: any) => {
      if (result.status === "success") {
        this.notificationservice.success("Record updated successfully")
      } if (result.status === "error") {
        this.notificationservice.error(" Record not updated")
      }
        this.router.navigate(['/home1/updateCustomer1'])
    })
    this.spinner.show();
    this.submitted = true;
    if (this.formGroup.invalid) {
      return;
    }
  }
  toggleFieldTextType(event: any) {
    if (event.target.id === 'btn11') {
      this.passwordfieldTextType = !this.passwordfieldTextType
    } if (event.target.id === 'btn12') {
      this.confirmfieldTextType = !this.confirmfieldTextType
    }
  }
  changeCondition(e){
  }
}
