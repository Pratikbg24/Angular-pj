import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders,HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import{ ICustomer} from '../component/customers-details'
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailServiceService {

  constructor( private _http:HttpClient) { }
  
  getCustomer():Observable<ICustomer>{
       return this._http.get<ICustomer>("https://thawing-eyrie-14958.herokuapp.com/users/getAnalysisData");      
  }
}

// return this._http.get<ICustomer[]>("https://thawing-eyrie-14958.herokuapp.com/users/createUser");
    //let url = "https://thawing-eyrie-14958.herokuapp.com/";
