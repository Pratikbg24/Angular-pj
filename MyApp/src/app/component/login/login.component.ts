import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';

import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms'

import { from } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'password is required.' },
      { type: "minlength", message: "Minimum length should be 5." },
      { type: "maxlength", message: "Maximum length should be less than 10." },
    ]
  }
  constructor(private service: LoginService, private fb: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]]
    })
  }


  login() {
    console.log(this.formGroup)
    this.service.getData(this.formGroup.value.email, this.formGroup.value.password).subscribe((data: any) => {
      console.log(data)
      if (data.status === "success") {
        alert("success")
      }
    }
    )
  }
}
