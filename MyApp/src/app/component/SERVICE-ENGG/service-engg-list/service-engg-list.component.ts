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

  constructor(private updateservice:UpdateServiceService) { 
    this.serviceEnggData = [];
  }
  
  ngOnInit() {
    this.getAllServiceEngg();
  }
  getAllServiceEngg(){
    this.updateservice.getList().subscribe((data:any)=>{
      this.serviceEnggData=data.data.filter((el:any)=>{
        return el.u_role === 3;
      })
    })
  }

}
