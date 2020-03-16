import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner'
import { ChartService } from '../../service/chart.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-assign-complaint',
  templateUrl: './assign-complaint.component.html',
  styleUrls: ['./assign-complaint.component.css']
})
/* 
@Output() searchcriteria = new EventEmitter<String>();
searchThis() {
    this.searchcriteria.emit(this.searchword)
} */

export class AssignComplaintComponent implements OnInit {

  pageTitle = 'Assign Complaints';

  complaint: any[];
  c_id: any[];
  Machine_type: any = {
    u_Machinepurchesed: null,

  }
  c_date: [];
  
  searchText;
  machinType:[];
  data=[

  ]

  constructor(private route: ActivatedRoute,
    private router: Router,
    private charts: ChartService,
    private spinner: NgxSpinnerService,
    private httpCilent: HttpClient) { }

  ngOnInit() {

    this.charts.getComplaintData().subscribe((data: any) => {
      this.complaint = data.data.filter((el: any) => {
        this.charts.getMachineType().subscribe((result: any) => {
          this.machinType = result.data;
          this.machinType.forEach((ell: any) => {
            if (el.Machine_type === ell.id) {
              el.Machine_type = ell.Value;
            }
          })
        })
        return el.c_desc
      })
      this.c_id = data.data.filter((el: any) => {
        return el.c_id
      })
      this.c_date = data.data.filter((el: any) => {
        return el.c_date
      })
      // this.Machine_type = data.data.filter((el: any) => {
      //   return el.Machine_type == 1
      // })


      


      this.Machine_type.u_Machinepurchesed = this.Machine_type.u_Machinepurchesed;

      

    }


    )/* 
    this.charts.getComplaintData().subscribe((data: any) => {

      if (data) {
        this.data= this.data.filter(function (ele, i, array) {
          let arrayelement = ele.c_desc.toLowerCase()
          return arrayelement.includes(data)
        })
      }

    }) */
  }
}