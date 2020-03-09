import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-status-check',
  templateUrl: './status-check.component.html',
  styleUrls: ['./status-check.component.css']
})
export class StatusCheckComponent implements OnInit {
  @Input() onlineStatusMessage: string;
  @Input() onlineStatus: string;
  constructor(){
  
}
  ngOnInit() {
  }

}
