import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { NgxSpinnerService} from 'ngx-spinner';

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
  //loading=false
  fieldTextType:boolean;
  Machine: any = ['CNC', 'CUTTER', 'SIVING', 'EMBRADORY']
  //dateValid = new Date().toISOString().slice(0,10);
  maxDate:Date;
  
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

  constructor(private fb: FormBuilder,private spinner:NgxSpinnerService) {
    this.maxDate=new Date();
    this.maxDate.setDate(this.maxDate.getDate()+0)
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
      if(password === confirmPassword){
          this.alert=true           
      }
      else{
        this.alert=false
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
      this.show();
      this.submitted = true;
    if (this.formGroup.invalid) {
      return;
    }
    
    this.formGroup.reset();
  }
  toggleFieldTextType(){
    this.fieldTextType = !this.fieldTextType;
  }
  show(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 5000)

  }


}
