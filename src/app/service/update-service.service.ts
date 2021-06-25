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
  
  constructor( private http:HttpClient) { }
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
  getList(): Observable<UpdateData> {
    return this.http
      .get<UpdateData>(this.base_path)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
updateItem(data:any) {
    return this.http
      .post<UpdateData>(this.base_path2 + 'users/updateUserById',data)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  deleteItem(data:any) {
    return this.http
      .post<UpdateData>(this.base_path2 + 'users/deleteUserById',data)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  machineType(){
    return this.http
    .get<UpdateData>(this.base_path1)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
}