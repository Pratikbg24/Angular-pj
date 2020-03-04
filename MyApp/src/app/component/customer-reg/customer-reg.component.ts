import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-customer-reg',
  templateUrl: './customer-reg.component.html',
  styleUrls: ['./customer-reg.component.css']
})
export class CustomerRegComponent implements OnInit {

 
  arr: FormArray
  formGroup: FormGroup
  submitted = false
  alert=false
  Machine: any = ['CNC', 'CUTTER', 'SIVING', 'EMBRADORY']
  dateValid = new Date().toISOString().slice(0,10);


  validation_messages = {

    'name': [
      { type: 'required', message: '*Name is required' },
      { type: 'minlength', message: '*Name must be 3 character' }
    ],
    'Mobilenumber': [
      { type: 'required', message: '*Mobile Number is Required' },
      { type: 'maxlength', message: '*Mobile number maximum length should be only 10 number' },
      { type: 'pattern' , message:'*Enter valid mobile number'},
      { type: 'minlength', message: '*Mobile number minumum lenght 10 number' }
      
    ],
    'Alternatemobile': [
      { type: 'maxlength', message: '*Maximum length 10 number' },
      { type: 'pattern' , message:'*Enter valid mobile number'},
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

  constructor(private fb: FormBuilder) { }

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
      Datepurchased: ['', Validators.compose([
        Validators.required
      ])],

      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6),
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
      if( password.length > 1 && password === confirmPassword){
          this.alert=true
      }
      
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



  get f() {
    return this.formGroup.controls;
  }

  onSubmit() {
    console.log(this.formGroup.value)
    console.log(this.formGroup)

    this.submitted = true;
    if (this.formGroup.invalid) {
      return;
    }
  }

}
