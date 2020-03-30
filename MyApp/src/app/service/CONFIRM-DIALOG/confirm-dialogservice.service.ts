import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogmodalComponent } from 'src/app/component/CONFIRM-DIALOG/confirm-dialogmodal/confirm-dialogmodal.component';


@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogserviceService {

  constructor(private matdialog:MatDialog) { }
  openConfirmDialog(msg){
    return this.matdialog.open(ConfirmDialogmodalComponent,{
       width: '390px',
       panelClass: 'confirm-dialog-container',
       disableClose: true,
       position: { top: "10%" },
       data :{
         message : msg
       }
     });
   }
}
