import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import {  FormGroup, FormBuilder, Validators,} from '@angular/forms';
import { LoadingSpinnerService} from '../../service/loading-spinner.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  returnUrls: string;
  submitted = false;
  alert = false;
  PasswordfieldTextType:boolean;
  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'password is required.' },
      { type: "minlength", message: "Minimum length should be 6" },
      { type: "maxlength", message: "Maximum lenght should be only 20 character" }
    ]
  }
  constructor(
    private service: LoginService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private spinner:LoadingSpinnerService
     ) {
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.returnUrls = this.route.snapshot.queryParams['returnUrls'] || '/';

    this.formGroup = this.fb.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])],

      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)])]
    })
  }


  onSubmit() {
     this.spinner.show();
    /* this.service.getData(this.formGroup.value.email, this.formGroup.value.password).subscribe((data:any) => {
      if (data.status === "success") {
           this.spinner.show();
        this.router.navigate([this.returnUrls + "home1"]);
      }
      else {
        if (data.status === "error") {
           this.spinner.show();
          this.alert = true;
        }
          this.formGroup.reset();
      }
    });  
     */
    
    this.service.userLogin(this.formGroup.value.email,  this.formGroup.value.password).subscribe((data: any) => {
      
      if (data.status === "success" && data.data.u_role === 3) {
        if (data.status === "success") {
          this.spinner.show();
       this.router.navigate([this.returnUrls + "home1"]);
     }
     }
       if (data.status === "success" && data.data.u_role === 2) {
        if (data.status === "success") {
          this.spinner.show();
       this.router.navigate([this.returnUrls + "home1"]);
     }
      } if (data.status === "success" && data.data.u_role === 1) {
        if (data.status === "success") {
          this.spinner.show();
       this.router.navigate([this.returnUrls + "app-cust-home"]);
     }
     }
     
     else {
      if (data.status === "error") {
         this.spinner.show();
        this.alert = true;
      }
        this.formGroup.reset();
    } 
    });










  }
  
  toggleFieldTextType(){
    this.PasswordfieldTextType = !this.PasswordfieldTextType;
  }
}