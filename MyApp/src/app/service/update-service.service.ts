import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { UpdateData } from '../models/update-data';
import { Observable, throwError } from 'rxjs';
import { retry,map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UpdateServiceService {
  data: UpdateData;

  base_path ="https://thawing-eyrie-14958.herokuapp.com/users/getAnalysisData";
  base_path1="https://thawing-eyrie-14958.herokuapp.com/complaint/getMachineType";
  base_path2="https://thawing-eyrie-14958.herokuapp.com/";
  // base_path3="https://thawing-eyrie-14958.herokuapp.com/users/updateUserById";
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
  // Get single customer data by ID
  getItem(u_id:any): Observable<UpdateData> {
      let data={
        "u_id":u_id
      }    
    return this.http
      .post<UpdateData>(this.base_path2 + 'users/getUserById',data)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
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
updateItem(data:any) {
    // let data={
    //   "u_id":u_id
    // }   
    return this.http
      .post<UpdateData>(this.base_path2 + 'users/updateUserById',data)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
    // Delete item by id
  deleteItem(data:any) {
    return this.http
      .post<UpdateData>(this.base_path2 + 'users/deleteUserById',data)
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