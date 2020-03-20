import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { LoadingSpinnerService } from '../../../service/loading-spinner.service'
import { ActivatedRoute,Router } from '@angular/router';
import { UpdateData} from '../../../models/update-data';
import { UpdateServiceService} from '../../../service/update-service.service'

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
  showSuccessMsg:boolean=false;
  showInvalidMsg:boolean=false;
  u_id :number;
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
    private activatedRoute:ActivatedRoute,
    private route:Router,
    private updateservice:UpdateServiceService
    ) {
      this.data=new UpdateData();
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate() + 0)
      this.Machinelist=[
        {name:"Computerised Embroidery Machines"},
        {name:"Reconditioned Barudan Embroidery Machines"},
        {name:"Circular Knitting Machines"},
        {name:"Flat Knitting Machines"},
        {name:"Chain Stitch Machines"},
        {name:"Laser Cutting Machines"},
        {name:"Dual Sequence Cording Machines"},
        {name:"Cap Knitting Machines"},
        {name:"Coller Knitting Machines"}
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

      email: [{value:'', disabled: true}, Validators.compose([
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
    this.getOneItem();
    //console.log(this.formGroup.value)
    this.spinner.show();
    this.submitted = true;
    this.showSuccessMsg=false;
    this.showInvalidMsg=false;
    if (this.formGroup.invalid) {
      return;
    }
    this.formGroup.reset();
  }
  getOneItem(){
    //  console.log(this.activatedRoute.snapshot.params.u_id)
    this.u_id=this.activatedRoute.snapshot.params["u_id"];
    this.updateservice.getItem(this.u_id).subscribe(Response=>{
      console.log(Response);
     // this.data=Response;
    })
  } 
   update(){
     this.updateservice.updateItem(this.u_id,this.data).subscribe(Response=>{
       this.route.navigate(['/home1/updateCustomer1']);
     })
   }   

  toggleFieldTextType(event: any) {
    if (event.target.id === 'btn11') {
      this.passwordfieldTextType = !this.passwordfieldTextType
    } if (event.target.id === 'btn12') {
      this.confirmfieldTextType = !this.confirmfieldTextType
    }
  }

}
