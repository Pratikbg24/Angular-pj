import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';

import { map } from "rxjs/operators";
@Injectable()
export class DashboardService {

  constructor(private http:HttpClient) { }
  getData() {
  
  return this.http.get('./assets/dashboard.json', {responseType: 'json'})
    
  }
}
