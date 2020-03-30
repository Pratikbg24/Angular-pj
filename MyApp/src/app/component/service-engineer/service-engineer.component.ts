import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { LoadingSpinnerService } from '../../service/loading-spinner.service';
import { ServiceEngineerService } from '../../service/service-engineer.service';
import { NotificationServiceService } from '../../service/NOTIFICATION-ALERT/notification-service.service'
@Component({
  selector: 'app-service-engineer',
  templateUrl: './service-engineer.component.html',
  styleUrls: ['./service-engineer.component.css']
})
export class ServiceEngineerComponent implements OnInit {
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

  constructor(private fb: FormBuilder, 
    private spinner: LoadingSpinnerService,
    private enggRegservice:ServiceEngineerService,
    private noficationservice:NotificationServiceService) {
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate() + 0);
    this.enggList=[
        {name:"Machanical"},
        {name:"Electronic"},
        {name:"Designing"}
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
  onSubmit() {
    //console.log(this.formGroup.value)
    this.enggRegservice.getData(
      this.formGroup.value.name, 
      this.formGroup.value.Mobilenumber,
      this.formGroup.value.Alternatemobile,
      this.formGroup.value.email,
      this.formGroup.value.Address,
      this.formGroup.value.EngineerType,      
      this.formGroup.value.DateOfjoining,
      this.formGroup.value.password,
      this.formGroup.value.confirmPassword)
      .subscribe((data:any) => {
        console.log(data)
        if(data.status === "success"){
         this.showSuccessMsg=true;
        //  console.log( this.noficationservice.success('! Record has been successfully deleted'))
         }if(data.status === "error"){
          console.log(data.message)
          this.showInvalidMsg=true;  
         }       
       });    
    this.spinner.show();
    this.submitted = true;
    this.showSuccessMsg=false;
    this.showInvalidMsg=false;
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
