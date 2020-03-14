import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders,HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailServiceService {

  constructor( private _http:HttpClient) { }
  
  getCustomer():Observable<any>{
       return this._http.get("https://thawing-eyrie-14958.herokuapp.com/users/createUser");
  }
}

// return this._http.get<ICustomer[]>("https://thawing-eyrie-14958.herokuapp.com/users/createUser");
    //let url = "https://thawing-eyrie-14958.herokuapp.com/";
