import { Component, OnInit } from '@angular/core';
import { LoadingSpinnerService } from '../../../service/loading-spinner.service'
@Component({
  selector: 'app-engg-header',
  templateUrl: './engg-header.component.html',
  styleUrls: ['./engg-header.component.css']
})
export class EnggHeaderComponent implements OnInit {

 activeButton
  constructor(private spinner: LoadingSpinnerService) { }

  ngOnInit() {
  }
  
 loader(event) {
    this.spinner.show();
    this.activeButton=event;
  }
  showButton(event){
    this.spinner.show();
    this.activeButton = event;
  }

}

