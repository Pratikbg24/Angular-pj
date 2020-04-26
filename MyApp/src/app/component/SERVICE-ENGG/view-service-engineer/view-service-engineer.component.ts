import { Component, OnInit } from '@angular/core';
import { UpdateServiceService } from '../../../service/update-service.service';
import { ActivatedRoute } from '@angular/router'
import { from } from 'rxjs';
@Component({
  selector: 'app-view-service-engineer',
  templateUrl: './view-service-engineer.component.html',
  styleUrls: ['./view-service-engineer.component.css']
})
export class ViewServiceEngineerComponent implements OnInit {
u_id:any;
Viewserviceengg:any
  constructor(private activatedrouter:ActivatedRoute,
    private updateservice: UpdateServiceService) {
      this.Viewserviceengg=[];
     }
  ngOnInit() {
    this.viewServiceEngg()
  }
  viewServiceEngg() {
    console.log(this.activatedrouter.snapshot.params.u_id)
    this.u_id = this.activatedrouter.snapshot.params["u_id"];
    this.updateservice.getItem(this.u_id).subscribe((result: any) => {
      // console.log(result)
      this.Viewserviceengg = result.data
      console.log(this.Viewserviceengg)
    });
    console.log(this.u_id)
  }

}
