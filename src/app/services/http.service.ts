import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from "../interfaces/user";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  private loginUrl = environment.api_url+'/api/auth/login/'

  constructor(private http:HttpClient) { }
  
  loginUser(cred){
    console.log(cred)
    return this.http.post<UserLogin>(this.loginUrl, cred).subscribe(data=>{
      console.log(data)
      return data
    })
  }
}
