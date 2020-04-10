import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { LoadingSpinnerService } from '../../service/loading-spinner.service'
import { CustomerRegService } from '../../service/customer-reg.service';
import { BsDatepickerConfig } from 'ngx-bootstrap'
import { NotificationServiceService} from '../../service/NOTIFICATION-ALERT/notification-service.service'
@Component({
  selector: 'app-customer-reg',
  templateUrl: './customer-reg.component.html',
  styleUrls: ['./customer-reg.component.css']
})
export class CustomerRegComponent implements OnInit {
  arr: FormArray
  formGroup: FormGroup
  submitted = false
  invalid: boolean
  alert = false
  passwordfieldTextType: boolean;
  confirmfieldTextType: boolean;
  Machinelist: Array<any> = [];
  servicePeriod:Array<any>=[];
  warrentyperiod:Array<any>=[];
  maxDate: Date;
   selection={}
  validation_messages = {
    'name': [
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
      { type: 'required', message: '*Email is required' },
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
    private custRegservice: CustomerRegService,
    private dpconfig:BsDatepickerConfig,
    private notificationservice:NotificationServiceService) {
    this.dpconfig.dateInputFormat='DD-MM-YYYY';
    this.dpconfig.isAnimated=true;
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate() + 0)
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
    this.servicePeriod=[
      {month:'1'},
      {month:'2'},
      {month:'3'},
      {month:'4'},
      {month:'5'},
      {month:'6'},
      {month:'7'},
      {month:'8'},
      {month:'9'},
      {month:'10'},
      {month:'11'},
      {month:'12'}
    ];
    this.warrentyperiod=[
      {totalmonth:'1'},
      {totalmonth:'2'},
      {totalmonth:'3'},
      {totalmonth:'4'},
      {totalmonth:'5'},
      {totalmonth:'6'},
      {totalmonth:'7'},
      {totalmonth:'8'},
      {totalmonth:'9'},
      {totalmonth:'10'},
      {totalmonth:'11'},
      {totalmonth:'12'}
    ]
  }
  ngOnInit() {

    this.formGroup = this.fb.group({
      name: ['', Validators.compose([
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
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ])],
      Address: ['', Validators.compose([
        Validators.required
      ])],
      Machine_purchase: ['', Validators.compose([
        Validators.required
      ])],
      machieCondition: ['', Validators.required
      ],
      Note: ['', Validators.compose([
        Validators.required
      ])],
      Machineno: ['', Validators.compose([
        Validators.required
      ])],
      servicePeriod: ['', Validators.compose([
        Validators.required
      ])],
      warrentPeriod: ['', Validators.compose([
        Validators.required
      ])],
      Datepurchased: ['', Validators.compose([
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
  get customerForm(){
    return this.formGroup.get('machieCondition');
  }
  onSubmit() {
    console.log(this.formGroup.value)
    this.spinner.show();
    this.custRegservice.getData(
      this.formGroup.value.name,
      this.formGroup.value.Mobilenumber,
      this.formGroup.value.Alternatemobile,
      this.formGroup.value.email,
      this.formGroup.value.Address,
      this.formGroup.value.Machine_purchase,
      this.formGroup.value.machieCondition,
      this.formGroup.value.Note,
      this.formGroup.value.Machineno,
      this.formGroup.value.servicePeriod,
      this.formGroup.value.warrentPeriod,
      this.formGroup.value.Datepurchased,
      this.formGroup.value.password,
      this.formGroup.value.confirmPassword)
      .subscribe((data: any) => {
        console.log(data)
        if (data.status === "success") {
          this.notificationservice.success("Registration Successfully ")
        } if (data.status === "error") {
          console.log(data.message)
          this.notificationservice.error("The email address or mobile number you have entered is already registered");
          
        }
      });
    this.submitted = true;    
    if (this.formGroup.invalid) {
      return;
    }
    this.formGroup.reset();
  }
  toggleFieldTextType(event: any) {
    if (event.target.id === 'btn11') {
      this.passwordfieldTextType = !this.passwordfieldTextType
    } if (event.target.id === 'btn12') {
      this.confirmfieldTextType = !this.confirmfieldTextType
    }
  }
}
