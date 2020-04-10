import { Component, OnInit,Inject, ViewChild } from '@angular/core'; 
import {ModalDirective} from 'ngx-bootstrap'
import { CustomerListComponent } from '../../CUSTOMERS/customer-list/customer-list.component';
// import { Subject } from 'rxjs/Subject'
import { Subject } from 'rxjs';
import {BsModalRef} from 'ngx-bootstrap/modal'
@Component({
  selector: 'app-confirm-dialogmodal',
  templateUrl: './confirm-dialogmodal.component.html',
  styleUrls: ['./confirm-dialogmodal.component.css']
})
export class ConfirmDialogmodalComponent implements OnInit {
  // @ViewChild(CustomerListComponent) public childdialog:CustomerListComponent;
    // @ViewChild('modal') public childdialog:ModalDirective;
    public onClose:Subject<boolean>;
    public active: boolean = false;
  constructor( private bsmodalRef:BsModalRef ) { }

  ngOnInit() {
    this.onClose = new Subject();
  }
  onConfirm(){
    this.onClose.next(true);
    this.bsmodalRef.hide();
  } 
  // show(){
    //   this.childdialog.show()
    // }
}
