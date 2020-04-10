import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule,HttpHeaders,HttpErrorResponse} from '@angular/common/http'
import { user } from '../user.module';
import { AppSettings } from '../../app/app.settings'
import { Data } from '../data';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ChartService {
  base_path ="https://thawing-eyrie-14958.herokuapp.com/users/getAnalysisData";
  
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
 
  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


  // Get single customer data by ID
  getItem(u_id:any): Observable<Data> {
    return this._http
      .get<Data>(this.base_path + '/' + u_id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
  // Get customer data
  getList(): Observable<Data> {
    return this._http
      .get<Data>(this.base_path)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  
  constructor(private _http:HttpClient) { 
  }

  public getMachineType() {
    return this._http.get(AppSettings.baseUrl + 'complaint/getMachineType');
  }

  
   getData()
  {
    return this._http.get<user[]>("https://thawing-eyrie-14958.herokuapp.com/users/getAnalysisData");
  } 
  getComplaintData()
  {
    return this._http.get("https://thawing-eyrie-14958.herokuapp.com/complaint/gelAllcomplaint");
  }
  assignComplaint(data:any)
  {
    let url="https://thawing-eyrie-14958.herokuapp.com/";
    return this._http.post(url+'complaint/assignComplaint',data);
  }




  public createComplaint(name:any,
    EngineerType:any,
    DateOfjoining:any,
    c_status:any,
    ) {
      let data = {
        "c_desc": name,
   //     "c_assignBy": this.navParams.get("user_id"),
        "machine_type": EngineerType,
        "c_date": DateOfjoining,
        "c_status": 1
      }
    return this._http.post(AppSettings.baseUrl + 'complaint/newComplaint', data);
  }
}
