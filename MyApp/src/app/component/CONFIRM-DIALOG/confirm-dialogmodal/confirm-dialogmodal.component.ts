import { Component, OnInit,Inject, ViewChild } from '@angular/core'; 
import {ModalDirective} from 'ngx-bootstrap'

@Component({
  selector: 'app-confirm-dialogmodal',
  templateUrl: './confirm-dialogmodal.component.html',
  styleUrls: ['./confirm-dialogmodal.component.css']
})
export class ConfirmDialogmodalComponent implements OnInit {
  // @ViewChild('childModal') public childdialog:CustomerListComponent;
    @ViewChild('#myModal') public myModal:ConfirmDialogmodalComponent;


  constructor(  ) { }

  ngOnInit() {
  }
    show(){
      this.myModal.show()
    }
    hide(){
      this.myModal.hide()
    }

}
