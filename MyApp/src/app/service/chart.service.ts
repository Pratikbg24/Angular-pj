import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule,HttpHeaders} from '@angular/common/http'
import { user } from '../user.module';
import { AppSettings } from '../../app/app.settings'

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  
  
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
}
