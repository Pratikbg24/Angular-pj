import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CustomerRegService {
    constructor( private http:HttpClient) {      }
   getData(
     name:any,
     Mobilenumber:any,
     Alternatemobile:any,
     email:any,
     Address:any,
     Machine_purchase:any,
     Datepurchased:any,
     password:any,
     confirmPassword:any,
    )
    {
      let data ={
        "u_name":name,
        "u_mobile":Mobilenumber,
        "u_altermobile":Alternatemobile,
        "u_email":email,
        "u_address":Address,
        "u_MachinePurchased":Machine_purchase,
        "u_dataOf_Purchased":Datepurchased,
        "u_password":password,
        "u_cpassword":confirmPassword,
        "u_role":1,
        "u_roleType":null,
        }

      console.log(data)
      let url = "https://thawing-eyrie-14958.herokuapp.com/";
      return this.http.post(url + 'users/createUser',data)
     }
 }