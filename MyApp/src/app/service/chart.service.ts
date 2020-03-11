import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule,HttpHeaders} from '@angular/common/http'
import { Data } from 'ngx-bootstrap/positioning/models';
@Injectable({
  providedIn: 'root'
})
export class ChartService {
  

   u_role:number;
   u_joinDate:Data;
      
  constructor(private _http:HttpClient) { 
  }

  
  /* getData()
  {

    let data={
     /*   "u_role1":u_role1,
      "u_role2":u_role2,
      "u_role3":u_role3
      /}

    return this._http.get("https://thawing-eyrie-14958.herokuapp.com/users/getAnalysisData");
  } */
}
interface getAnalysisData
{
  
}