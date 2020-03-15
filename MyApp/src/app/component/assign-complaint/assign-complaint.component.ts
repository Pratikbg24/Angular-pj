import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner'
import { format } from 'url';
import { ChartService } from '../../service/chart.service'
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Data } from 'src/app/data';

@Component({
  selector: 'app-assign-complaint',
  templateUrl: './assign-complaint.component.html',
  styleUrls: ['./assign-complaint.component.css']
})
export class AssignComplaintComponent implements OnInit {

  
  complaint:any[];
  c_id:any[];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private charts: ChartService,
    private spinner: NgxSpinnerService,
    private httpCilent: HttpClient) { }

  ngOnInit() {

    this.charts.getComplaintData().subscribe((data:any)=>
      {

        this.complaint = data.data.filter((el:any)=>
        {
            return el.c_desc
        })
      
        this.c_id = data.data.filter((el:any)=>
        {
            return el.c_id
        })
      
        console.log(data)
      }
  
    
    )

    }
  }