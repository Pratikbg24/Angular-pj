import { Component, OnInit } from '@angular/core';
import { UpdateServiceService} from '../../../service/update-service.service';

@Component({
  selector: 'app-service-engg-list',
  templateUrl: './service-engg-list.component.html',
  styleUrls: ['./service-engg-list.component.css']
})
export class ServiceEnggListComponent implements OnInit {

  serviceEnggData: any;
  DataList:any
  u_email="";
  constructor(private updateservice:UpdateServiceService) { 
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

}
