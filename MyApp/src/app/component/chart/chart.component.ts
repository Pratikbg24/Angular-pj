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



  users: user[];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private charts: ChartService,
    private spinner: NgxSpinnerService,
    private httpCilent: HttpClient) {


  }

  ngOnInit() {




    return this.charts.getData()
      .subscribe(data => this.users = data)

    console.log(user);
   
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
