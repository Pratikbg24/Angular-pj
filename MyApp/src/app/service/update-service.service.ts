import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { UpdateData } from '../models/update-data';
import { Observable, throwError } from 'rxjs';
import { retry,map, catchError } from 'rxjs/operators';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UpdateServiceService {
  data: UpdateData;

  base_path ="https://thawing-eyrie-14958.herokuapp.com/users/getAnalysisData";
  base_path1="https://thawing-eyrie-14958.herokuapp.com/complaint/getMachineType";
  base_path2="https://thawing-eyrie-14958.herokuapp.com/users/getUserById";

  constructor( private http:HttpClient) { }

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


  // // Get single customer data by ID
  // getItem(u_id:any,item: UpdateData): Observable<UpdateData> {
  //   return this.http
  //     .get<UpdateData>(this.base_path2 + '/' + u_id)
  //     .pipe(
  //       retry(2),
  //       catchError(this.handleError)
  //     )
  // }

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
       }
       
     console.log(data)
     let url = "https://thawing-eyrie-14958.herokuapp.com/";
     return this.http.post(url + 'users/getUserById',data)
    }


  
  // Get customer data
  getList(): Observable<UpdateData> {
    return this.http
      .get<UpdateData>(this.base_path)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
  // Update item by id
  updateItem(u_id:any, item: UpdateData): Observable<UpdateData> {
    return this.http
      .put<UpdateData>(this.base_path + '/' + u_id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
  // Delete item by id
  deleteItem(u_id) {
    return this.http
      .delete<UpdateData>(this.base_path + '/' + u_id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Get Machine Type

  machineType(){
    return this.http
    .get<UpdateData>(this.base_path1)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
}
