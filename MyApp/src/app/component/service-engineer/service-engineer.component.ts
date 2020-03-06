import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { BsDatepickerDirective} from 'ngx-bootstrap/datepicker';
import { Router,ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-service-engineer',
  templateUrl: './service-engineer.component.html',
  styleUrls: ['./service-engineer.component.css']
})
export class ServiceEngineerComponent implements OnInit {
  arr: FormArray
  formGroup: FormGroup
  // returnUrls:string
  submitted = false
  alert=false
  loading=false
  fieldTextType:boolean;
    Engg: any = ['Mechnical', 'Electronic', 'Designing']
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
    'Engineer1': [
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

  constructor(private fb: FormBuilder,) 
    {
    this.maxDate=new Date();
    this.maxDate.setDate(this.maxDate.getDate()+0);
    // this.router.navigate(['/']);
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

      Engineer1: ['', Validators.compose([
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
  changeEngineer(e) {
    console.log(e.value)
    this.Engineer1.setValue(e.target.value, {
      onlySelf: true
    })
  }

  get Engineer1() {
    return this.formGroup.get('Engineer1');
  }



  get f() {
    return this.formGroup.controls;
  }

  onSubmit() {
    console.log(this.formGroup.value)
    console.log(this.formGroup)
      
    this.loading=true;
    this.submitted = true;
    if (this.formGroup.invalid) {
      return;
    }
    
    this.formGroup.reset();
  }
  toggleFieldTextType(){
    this.fieldTextType = !this.fieldTextType;
  }

  // showEngineer(){
  //   this.router.navigate([this.returnUrls + "serviceEngineer"]);
  // }
  

    
}
