import { Injectable } from '@angular/core';
declare var toastr:any
@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {

  constructor() {
    this.setting();
   }
    success(title:any,message?:any){
      toastr.success(title,message)
    }
    warning(title:string,message?:string){
      toastr.warning(title,message)
    }
    error(title:string,message?:string){
      toastr.error(title,message)
    }
    setting(){
      toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-full-width",
        "preventDuplicates": true,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }
    }
}
  

