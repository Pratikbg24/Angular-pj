import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner'
import { format } from 'url';
import {ChartService} from '../../service/chart.service'
import { from } from 'rxjs';
import { HttpClient} from '@angular/common/http';  

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
data:ChartService[];
url:"https://thawing-eyrie-14958.herokuapp.com/users/getAnalysisData";
JoinDate=[];
Role=[];
pieChart=[];
  constructor(private route: ActivatedRoute,
    private router: Router,
    private chart:ChartService,
    private spinner: NgxSpinnerService,
    private httpCilent:HttpClient)
     {
    //this.router.navigate(['/']);

  }

  ngOnInit() {
    // this.returnUrls = this.route.snapshot.queryParams['returnUrls'] || '/';
   
      this.httpCilent.get(this.url).subscribe((result:ChartService[])=>{
        console.log(result)
        result.forEach(x =>{
          this.JoinDate.push(x.u_role);
      
          this.JoinDate.push(x.u_joinDate);
        
        });
        
        this.pieChart=new Chart('canvas',{
          type:'pie',
          data:{
            labels:this.Role,
            datasets:[{
              data:this.JoinDate,
              borderColor: '#3cba9f',  
              backgroundColor: [  
                "#3cb371",  
                "#0000FF",  
                "#9966FF"
              ],
              fill: true 
            
            }
          ]
          },
          options: {  
            legend: {  
              display: true  
            },  
            scales: {  
              xAxes: [{  
                display: true  
              }],  
              yAxes: [{  
                display: true  
              }],  
            }  
          }
        });
      });
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
