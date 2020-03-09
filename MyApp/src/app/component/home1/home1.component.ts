import { Component, OnInit } from '@angular/core';
import{DashboardService} from '../../service/dashboard.service';
import{HttpClient} from '@angular/common/http';
import { Chart} from 'chart.js';
import { from } from 'rxjs';
import {observable} from 'rxjs'

 @Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {
  
  constructor() { }

  ngOnInit() {

}
}
