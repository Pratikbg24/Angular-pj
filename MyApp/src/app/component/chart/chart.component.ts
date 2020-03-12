import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner'
import { format } from 'url';
import { ChartService } from '../../service/chart.service'
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { user } from '../../user.module';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Data } from 'src/app/data';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  users:any[];
  graphData:any={
    userCount:0,
    enggCount:0,
    adminCount:0
  };
  engg:any[];
  admin:any[];
  chart:[];
  constructor(private route: ActivatedRoute,
    private router: Router,
    private charts: ChartService,
    private spinner: NgxSpinnerService,
    private httpCilent: HttpClient) {


  }

  ngOnInit() {
    this.charts.getData().subscribe((data:any)=>{
      this.users=data.data.filter((el:any)=>{
        return  el.u_role === 1
      })
      this.engg=data.data.filter((el:any)=>{
        return  el.u_role === 3
      })
      this.admin=data.data.filter((el:any)=>{
        return  el.u_role === 2
      })

      this.graphData.userCount = this.users.length;
      this.graphData.enggCount = this.engg.length;
      this.graphData.adminCount = this.admin.length;

      
    this.chart=new Chart('canvas',{
      type:'pie',
      data:{
        labels:["admin","engg","users"],
        datasets:[
        {
          data:[this.graphData.adminCount,this.graphData.enggCount,this.graphData.userCount],
                   borderColor: 'yellow',  
                backgroundColor: [  
                  "red",  
                  "blue",  
                  "green",  
                ],
                fill :true
        }
        ]
      },
      options:{
        legend:{
          display:true

        }
      },
      scales: {  
        xAxes: [{  
          display: true  
        }],  
        yAxes: [{  
          display: true  
        }],  
      }  
    })
    })
    
   
  }
  showEngineer() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 5000)
  }
  showCustomer() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 5000)
  }

}
