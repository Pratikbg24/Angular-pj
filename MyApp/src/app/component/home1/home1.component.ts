import { Component, OnInit } from '@angular/core';
import{DashboardService} from '../../service/dashboard.service';
import{HttpClient} from '@angular/common/http';
import { Chart} from 'chart.js';
import { from } from 'rxjs';
import {observable} from 'rxjs'
import {Data} from '../data';
 @Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {
  
title='app';
data: Data[];
  url = 'http://localhost:4200/';
  month = [];
  price = [];
  chart = [];
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
    this.httpClient.get(this.url).subscribe((res: Data[]) => {
      res.forEach(y => {
        this.month.push(y.month);
        this.price.push(y.price);
      });
      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.month,
          datasets: [
            {
              data: this.price,
              borderColor: '#3cba9f',
              fill: false
            }
          ]
        },
        options: {
          legend: {
            display: false
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
  

}
