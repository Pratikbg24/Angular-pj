import { Injectable } from '@angular/core';
import { NgxSpinnerService} from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class LoadingSpinnerService {

  constructor(private spinner: NgxSpinnerService) { }

  show(){
    this.spinner.show();
    setTimeout(()=>{
      this.spinner.hide();
    },5000)
  }
}
