import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-confirm-dialogmodal',
  templateUrl: './confirm-dialogmodal.component.html',
  styleUrls: ['./confirm-dialogmodal.component.css']
})
export class ConfirmDialogmodalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,
  public dialogRef: MatDialogRef<ConfirmDialogmodalComponent>) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close(false);
  }

}
