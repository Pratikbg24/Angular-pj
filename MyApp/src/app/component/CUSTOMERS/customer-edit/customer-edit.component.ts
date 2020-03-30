import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { LoadingSpinnerService } from '../../../service/loading-spinner.service'
import { ActivatedRoute, Router, Params } from '@angular/router';
import { UpdateData } from '../../../models/update-data';
import { UpdateServiceService } from '../../../service/update-service.service'
import { DatePipe } from '@angular/common'
import { from } from 'rxjs';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  arr: FormArray
  formGroup: FormGroup
  submitted = false
  alert = false
  invalid: boolean
  passwordfieldTextType: boolean;
  confirmfieldTextType: boolean;
  Machinelist: Array<any> = [];
  maxDate: Date;
  showSuccessMsg: boolean = false;
  showInvalidMsg: boolean = false;
  u_id: any;
  data4:any;
  customerdata = new UpdateData();
  
  validation_messages = {

    'u_name': [
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


  constructor(private fb: FormBuilder,
    private spinner: LoadingSpinnerService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private updateservice: UpdateServiceService,
    private datePipe:DatePipe
  ) {
  //  this.maxDate = this.datePipe.transform(new Date(),"dd-MM-yyyy");
     this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate() + 0);
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
    ]
  }
  ngOnInit() {
    this.viewCustomer();
    this.formGroup = this.fb.group({
      u_name: ['', Validators.compose([
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
      email: [{ value: '', disabled: true }, Validators.compose([
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
  onSubmit() {
    this.spinner.show();
    this.submitted = true;
    this.showSuccessMsg = false;
    this.showInvalidMsg = false;
    if (this.formGroup.invalid) {
      return;
    }
    this.formGroup.reset();
  }
  viewCustomer() {
    console.log(this.activatedRoute.snapshot.params.u_id)
    this.u_id = this.activatedRoute.snapshot.params["u_id"];
    this.updateservice.getItem(this.u_id).subscribe((result: any) => {
      
      this.formGroup.patchValue({
        u_name:result.data[0].u_name,
        Mobilenumber:result.data[0].u_mobile,
        Alternatemobile:result.data[0].u_altermobile,
        email:result.data[0].u_email,
        Address:result.data[0].u_address,
        Machine_purchase:result.data[0].u_MachinePurchased,
        Datepurchased:result.data[0].u_dateOf_Purchased,
        password:result.data[0].u_password,
        confirmPassword:result.data[0].u_cpassword,
      })
      console.log(this.u_id)
      //console.log(result)
      this.data4=result
     // console.log(this.data4)
      this.customerdata=this.data4;
      console.log(this.customerdata)
    })
  }
  
  // //  update(){
  //    this.updateservice.updateItem(this.u_id,this.data).subscribe(Response=>{
  //      this.route.navigate(['/home1/updateCustomer1']);
  //    })
  //  }   


  toggleFieldTextType(event: any) {
    if (event.target.id === 'btn11') {
      this.passwordfieldTextType = !this.passwordfieldTextType
    } if (event.target.id === 'btn12') {
      this.confirmfieldTextType = !this.confirmfieldTextType
    }
  }
}
