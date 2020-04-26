import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { LoadingSpinnerService } from '../../../service/loading-spinner.service'
import { ActivatedRoute,Router } from '@angular/router';
import { UpdateData} from '../../../models/update-data';
import { UpdateServiceService} from '../../../service/update-service.service'
import { NotificationServiceService } from 'src/app/service/NOTIFICATION-ALERT/notification-service.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
// import { LoadingSpinnerService } from '../../../service/loading-spinner.service'

@Component({
  selector: 'app-service-engg-edit',
  templateUrl: './service-engg-edit.component.html',
  styleUrls: ['./service-engg-edit.component.css']
})
export class ServiceEnggEditComponent implements OnInit {
  arr: FormArray
  formGroup: FormGroup
  submitted = false
  alert = false
  invalid: boolean
  confirmTextField: boolean;
  passwordTextField: boolean;
  enggList: Array<any> = [];
  maxDate: Date;
  showSuccessMsg:boolean=false;
  showInvalidMsg:boolean=false;
  u_id:number;
  data:UpdateData;
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
      { type: 'pattern', message: '*Enter valid email' }
    ],
    'password': [
      { type: 'required', message: '*Password is required' },
      { type: 'minlength', message: '*Password minumum length 6 Character.' }
    ],
    'Address': [
      { type: 'required', message: '*Address is required' },
    ],
    'EngineerType': [
      { type: 'required', message: '*Please select engineer type' },
    ],
    'DateOfjoining': [
      {
        type: 'required', message: '*Please select date'
      }
    ],
    'confirmPassword': [
      { type: 'required', message: '*Password required' },
      { type: 'minlength', message: '*Password minumum length 6 character.' }
    ]
  }
  enggData: UpdateData;
  constructor(private fb: FormBuilder, 
    private spinner: LoadingSpinnerService,
    private activatedRoute:ActivatedRoute,
    private route:Router,
    private updateservice:UpdateServiceService,
    private notificationservice:NotificationServiceService,
    private dpconfig :BsDatepickerConfig
) {
  this.dpconfig.dateInputFormat='YYYY-MM-DD';
    this.dpconfig.isAnimated=true;
    this.data=new UpdateData();
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate() + 0);
    this.enggList=[
        {name:"Machanical"},
        {name:"Electronic"},
        {name:"Designing"}
    ]
  }
  ngOnInit() {
    this.viewEngg();
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
      email: [{value:'',disabled:true}, Validators.compose([
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ])],
      Address: ['', Validators.compose([
        Validators.required
      ])],
      EngineerType: ['', Validators.compose([
        Validators.required
      ])],
      DateOfjoining: ['', Validators.compose([
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
      return { invalid: true }
    }
  }
  get f() {
    return this.formGroup.controls;
  }
  viewEngg() {
    console.log(this.activatedRoute.snapshot.params.u_id)
    this.u_id = this.activatedRoute.snapshot.params["u_id"];
    // console.log(this.u_id)
    this.updateservice.getItem(this.u_id).subscribe((result: any) => {      
      this.formGroup.patchValue({
        name:result.data[0].u_name,
        Mobilenumber:result.data[0].u_mobile,
        Alternatemobile:result.data[0].u_altermobile,
        email:result.data[0].u_email,
        Address:result.data[0].u_address,
        DateOfjoining:result.data[0].u_joinDate,  
        password:result.data[0].u_password,
        confirmPassword:result.data[0].u_cpassword,
      })
      console.log(this.u_id)
      this.data=result
      this.enggData=this.data;
      console.log(this.enggData)
    })
  }
  onSubmit(formValue: any) {
    let payload = {
      "u_name": formValue.name,
      "u_mobile": formValue.Mobilenumber,
      "u_altermobile": formValue.Alternatemobile,
      "u_email": formValue.email,
      "u_address": formValue.Address,
      "u_joinDate":formValue.DateOfjoining,
      "u_password": formValue.password,
      "u_cpassword": formValue.confirmPassword
    }
    this.updateservice.updateItem(payload).subscribe((result: any) => {
      if (result.status === "success") {
        this.notificationservice.success("Record updated successfully")
        // this.customerlist.getAllCustomers();
      } if (result.status === "error") {
        this.notificationservice.error(" Record not updated")
        console.log(result.message)
      }
      this.spinner.show();
    })
    this.spinner.show();
    this.submitted = true;
    if (this.formGroup.invalid) {
      return;
    }
    this.formGroup.reset();
  }
  toggleFieldTextType(event: any) {
    if (event.target.id === 'btn1') {
      this.passwordTextField = !this.passwordTextField
    } if (event.target.id === 'btn2') {
      this.confirmTextField = !this.confirmTextField
    }
  }
}
