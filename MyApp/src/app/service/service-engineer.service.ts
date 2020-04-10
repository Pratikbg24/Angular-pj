import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceEngineerService {

  constructor(private http:HttpClient) { }
  
  getData(
    name:any,
    Mobilenumber:any,
    Alternatemobile:any,
    email:any,
    Address:any,
    EngineerType:any,
    DateOfjoining:any,
    password:any,
    confirmPassword:any
   )
   {
    let data ={
      "u_name":name,
      "u_mobile":Mobilenumber,
      "u_altermobile":Alternatemobile,
      "u_email":email,
      "u_address":Address,
      "u_EngineerType":EngineerType,
      "u_joinDate":DateOfjoining,
      "u_password":password,
      "u_cpassword":confirmPassword,
      "u_role":3,
      "u_roleType":1
      }
      console.log(data)
      let url = "https://thawing-eyrie-14958.herokuapp.com/";
      return this.http.post(url + 'users/createUser',data)
    }
  }
