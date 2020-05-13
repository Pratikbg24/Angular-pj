import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingSpinnerService} from '../../service/loading-spinner.service'
import { ChartService } from '../../service/chart.service'
import { HttpClient } from '@angular/common/http';
import { AppSettings } from 'src/app/app.settings';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  date1:any[];
  users:any[];
  graphData:any={
    userCount:0,
    enggCount:0,
    adminCount:0
  };
  userCount1:number[];
  enggCount1:number[];
  adminCount1:number[];
  engg:any[];
  admin:any[];
  chart:[];
  statusOpen:number[];
  statusClosed:number[];
  statusPending:number[];
  countData:any={
    openCount:0,
    closedCount:0,
    pendingCount:0  
  };
  openCount1:number[];
  closedCount1:number[];
  pendingCount1:number[];
  complaint:any[];
  filterData:any[];
  u1: any;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private charts: ChartService,
    private spinner: LoadingSpinnerService,
    private httpCilent: HttpClient) {
  }
  ngOnInit() {
    this.initializeItems()
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
      this.date1  =data.data.filter((el:any)=>{
          return el.u_joinDate       
         })
         let x=   this.date1;       
         let allDate= []
         this.date1.forEach(x => {
         let jsdate =new Date(x*1000)
         allDate.push(jsdate.toLocaleDateString('en',{year:'numeric',month:'short',day:'numeric'}))           
         });
     
      this.graphData.userCount = this.users.length;
      this.graphData.enggCount = this.engg.length;
      this.graphData.adminCount = this.admin.length;
     
      this.userCount1=this.graphData.userCount      
     
      this.enggCount1=this.graphData.enggCount
     
      this.adminCount1=this.graphData.adminCount
      
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
          display:true,
          position:'right'
        },
        title: {
          display: true,
          text: 'Custom Chart ',
          position:'bottom',
          fontSize:20,
          padding:20,
          fontStyle:'bold'
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
 this.charts.getAllComplaint().subscribe((data:any)=>{
  this.statusOpen=data.data.filter((el:any)=>{
    return  el.c_status === 1
  })

  this.countData.openCount=this.statusOpen.length;
  this.openCount1=this.countData.openCount
  this.statusClosed=data.data.filter((el:any)=>{
    return  el.c_status === 2
  })

  this.countData.closedCount=this.statusClosed.length;
  this.closedCount1=this.countData.closedCount
   this.statusPending=data.data.filter((el:any)=>{
    return  el.c_status === 3
  })
  this.countData.pendingCount=this.statusPending.length;
  this.pendingCount1=this.countData.pendingCount
 
this.chart=new Chart('complaintsStatusCart',{
  type:'doughnut',
  data:{
    labels:["open","pending","closed"],
    datasets:[
    {
      data:[this.countData.openCount,this.countData.pendingCount,this.countData.closedCount],
               borderColor: 'yellow',  
            backgroundColor: [  
              "green",  
              "orange",  
              "Red",  
            ],
            fill :true
    }
    ]
  },
  options:{
    legend:{
      display:true,
      position:'right'
    },
    title: {
      display: true,
      text: 'Customer Complaint Status',
      position:'bottom',
      fontSize:20,
      padding:20,
      fontStyle:'bold'
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
});
  }
  initializeItems() {
    this.charts.getAllComplaint().subscribe((result: any) => {
      this.complaint = result.data;
      this.complaint = this.complaint.filter((ele: any) => {
        AppSettings.status.forEach((e: any) => {
          if (parseInt(e.id) === parseInt(ele.c_status)) {
            ele.c_status = e.value;
          }
        });
        return ele
      })
      this.filterData=this.complaint;
    })
   
  }
  openComplaint() {
    
    this.filterData= this.complaint.filter(data => {
      return data.c_status === 'Open' 
    });   
    }
  closeComplaint() {
    
    this.filterData= this.complaint.filter(data => {
      return data.c_status === 'Close' 
    });   
  }
  pendingComplaint() {
    
    this.filterData= this.complaint.filter(data => {
      return data.c_status === 'Pending' 
    });   
  }

  showEngineer() {
    this.spinner.show();
  }
  showCustomer() {
    this.spinner.show();
  }
    userCount(){
      this.spinner.show();
      this.router.navigate(['/home1/updateCustomer1'])
    }
    enggCount(){
      this.spinner.show();
      this.router.navigate(['/home1/updateserviceEngineer'])
    }
}
