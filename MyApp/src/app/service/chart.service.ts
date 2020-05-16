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
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
  getItem(u_id:any): Observable<Data> {
    return this._http
      .get<Data>(this.base_path + '/' + u_id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
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
  
  public getAllComplaint() {
    return this._http.get(AppSettings.baseUrl + 'complaint/gelAllcomplaint');
  }
  
  public getCustomerDetails(id: any) {
    let data = {
      "u_id": id
    }
    return this._http.post(AppSettings.baseUrl + 'users/getAll', data);
  }


  public updateComplaint(c_status: any,
    c_id:any,
    e_desc:any
    ) {
    let data={
      "status":c_status,
     " complaintId":c_id,
     " e_desc":e_desc
    }
        return this._http.post(AppSettings.baseUrl + 'complaint/updateComplaint', data);
  }
  public createComplaint(name:any,
    EngineerType:any,
    priority: any,
    DateOfjoining:any,
    c_status:any,
    c_assignBy:any,
    ) {
      let data = {
        "c_desc": name,
      "c_assignBy": window.localStorage.getItem('id'),
        "machine_type": EngineerType,
        "priority": priority,
        "c_date": DateOfjoining,
        "c_status": 1
      }
    return this._http.post(AppSettings.baseUrl + 'complaint/newComplaint', data);
  }
  public downloadAllComplait(email:any,result:any)
  {
    let data = {
      "email": email,
    "data": result,
     }
    return this._http.post(AppSettings.baseUrl + 'users/excelToMail', data);

  }
}
