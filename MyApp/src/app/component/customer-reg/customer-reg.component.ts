import { Component, OnInit } from '@angular/core';
import  { FormGroup, FormArray, Validators, FormBuilder}from '@angular/forms';

@Component({
  selector: 'app-customer-reg',
  templateUrl: './customer-reg.component.html',
  styleUrls: ['./customer-reg.component.css']
})
export class CustomerRegComponent implements OnInit {


  arr: FormArray
  formGroup: FormGroup
  submitted=false

  Machine: any = ['CNC', 'CUTTER', 'SIVING', 'EMBRADORY']

  validation_messages = {

    'name': [
      { type: 'required', message: 'Name is Required' },
      { type: 'minlength', message: 'Name Must be 6 character' }
    ],
    'Mobilenumber':[
      {type:'required',message:'Mobile Number is Required'},
      {type:'maxlength',message:'Mobile Number maximum length should be only 10 number'}
    ],
    'Alternatemobile':[
      {type:'maxlength',message:'Mobile Number maximum length should be only 10 number'}
      
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter Valid Email' },
      { type: 'minlength', message: ' minimum length 4 Character.' },
    ],

    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'pattern', message: ' password Must Contain Minimum 6 character and maximum 30 characters, at least one uppercase letter, one lowercase letter, one number and one special character:' },
      { type: 'minlength', message: 'password minumum length 6 Character.' },
      { type: 'maxlength', message: 'password maximum length 30 Character.' }
    ],
    'Address':[
      { type: 'required', message: 'Address is Required' },      
    ],
    'Machine_purchase':[
      { type: 'required', message: ' please Select Any one Machine' },      
    ],

    'confirmPassword': [
      { type: 'required', message: 'Password Required' },
      { type: 'minlength', message: 'password minumum length 6 Character.' },
      { type: 'maxlength', message: 'password maximum length 30 Character.' }
    ]
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])],

      Mobilenumber:['',Validators.compose([Validators.required,Validators.maxLength(10)])],
      Alternatemobile:['',Validators.compose([Validators.maxLength(10)])],

      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"),
        Validators.minLength(4)
      ])],
      Address:['',Validators.compose([Validators.required])],

      Machine_purchase: ['',Validators.compose([Validators.required])],

      password: ['', Validators.compose([
        Validators.required,
        Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,30}$"),
        Validators.minLength(6),
        Validators.maxLength(30)
      ])],


      confirmPassword: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)

      ])]
    },
      {
        validators: this.passwordConfirming.bind(this)
      });
  }


  passwordConfirming(formGroup: FormGroup) {

    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmPassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }
  changeMachine(e) {
    console.log(e.value)
    this.Machine_purchase.setValue(e.target.value, {
      onlySelf: true
    })
  }

  get Machine_purchase() {
    return this.formGroup.get('Machine_purchase');
  }



    get f(){
      return this.formGroup.controls;
    }

    onSubmit() {
    console.log(this.formGroup.value)
    console.log(this.formGroup)
     
    this.submitted=true;
    if(this.formGroup.invalid){
      return;
    }
  }

}
