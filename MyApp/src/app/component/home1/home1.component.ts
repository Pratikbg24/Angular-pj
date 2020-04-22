import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner'
import { format } from 'url';
import { GetuidService } from '../../service/getuid.service'
@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {
 
  constructor(  private messageService: GetuidService,) { }

  ngOnInit() {
    }
    


  sendMessage(): void {
    // send message to subscribers via observable subject
    this.messageService.sendMessage(sessionStorage.getItem('u_id'));

  }

  clearMessages(): void {
    // clear messages
    this.messageService.clearMessages();
  }

}

