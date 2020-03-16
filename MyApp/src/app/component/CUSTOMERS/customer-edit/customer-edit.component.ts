import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { UpdateData} from '../../../models/update-data';
import { UpdateServiceService} from '../../../service/update-service.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  u_id :any;
  data:UpdateData;
  constructor( 
    private activatedRoute:ActivatedRoute,
    private route:Router,
    private updateservice:UpdateServiceService) {
      this.data=new UpdateData();
     }

  ngOnInit() {
      this.u_id=this.activatedRoute.snapshot.params["u_id"];
      this.updateservice.getItem(this.u_id).subscribe(response=>{
        console.log(response);
        this.data=response;
      })
  }
     update(){
       this.updateservice.updateItem(this.u_id,this.data).subscribe(response=>{
         this.route.navigate(['customerdetail']);
         this.data=response;
       })
     }   
}
