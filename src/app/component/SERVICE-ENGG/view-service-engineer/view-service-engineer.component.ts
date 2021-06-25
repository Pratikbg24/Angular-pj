import { Component, OnInit } from '@angular/core';
import { UpdateServiceService } from '../../../service/update-service.service';
import { ActivatedRoute,Router } from '@angular/router'
import { LoadingSpinnerService} from '../../../service/loading-spinner.service'
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
    private updateservice: UpdateServiceService,
    private router:Router,
    private spinner:LoadingSpinnerService) {
      this.Viewserviceengg=[];
     }
  ngOnInit() {
    this.viewServiceEngg()
  }
  viewServiceEngg() {
    this.u_id = this.activatedrouter.snapshot.params["u_id"];
    this.updateservice.getItem(this.u_id).subscribe((result: any) => {
      this.Viewserviceengg = result.data
       });
    }
  back(){
    this.spinner.show()
    this.router.navigate(['/home1/updateserviceEngineer'])
  }

}
