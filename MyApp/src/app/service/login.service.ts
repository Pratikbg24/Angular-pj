import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';
  import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) {

   }
   getData(username:any,pass:any){
    let data={
      "email":username,
      "password": pass
    }
    console.log(data)
    let url="https://thawing-eyrie-14958.herokuapp.com/";
    return this.http.post(url+'users/login',data)
   }
}
