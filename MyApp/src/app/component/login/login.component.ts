import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import{Router,ActivatedRoute} from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms'

import { from } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  returnUrl: string;
  //returnUrls: string;
  loading = false;
  submitted = false;
  alert = false;
  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      {type:"minlength",message:"Minimum length should be 5"}
    ]
  }
  constructor(private service: LoginService, private fb: FormBuilder,
              private route:ActivatedRoute,
              private router:Router,) {
                this.router.navigate(['/']);
               }

  ngOnInit() {

      this.returnUrl =this.route.snapshot.queryParams['returnUrl']||'/'
    this.formGroup = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]]
    })
  }

 
   clickMe() {
    this.loading = true; this.service.getData(this.formGroup.value.email, this.formGroup.value.password).subscribe((data: any) => {
      if (data.status === "success") {
        this.loading = true;
        this.router.navigate([this.returnUrl+"home1"]);}
      else {
        if (data.status === "error") {
          this.loading = true;
          this.alert = true;
        }
        this.loading = false;
          this.formGroup.reset();

        
      }

    }

    );
   
  }

}