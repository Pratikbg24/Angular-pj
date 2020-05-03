import { Component, OnInit } from '@angular/core';
import { UpdateServiceService} from '../../../service/update-service.service';
import { LoadingSpinnerService} from '../../../service/loading-spinner.service'
@Component({
  selector: 'app-update-service-engg',
  templateUrl: './update-service-engg.component.html',
  styleUrls: ['./update-service-engg.component.css']
})
export class UpdateServiceEnggComponent implements OnInit {

  serviceEnggData: any;
  DataList:any
  u_email="";
  constructor(private updateservice:UpdateServiceService,
    private spinner :LoadingSpinnerService) { 
    this.serviceEnggData = [];
  }
  ngOnInit() {
    this.getAllServiceEngg();
    // this.getEngineerType();
  }
  getAllServiceEngg(){
    this.updateservice.getList().subscribe((data:any)=>{
      this.serviceEnggData=data.data.filter((el:any)=>{
        return el.u_role === 3;
      })
    })
  }
  // getEngineerType(){
  //   this.updateservice.machineType().subscribe((data:any)=>{
  //     this.serviceEnggData=data;
  //   })
  // }
  loader(){
    this.spinner.show();
  }

}
