import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginComponent } from '../components/login/login.component'
import { User } from "../interfaces/user";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user = this.data.user;
  private loginUrl = environment.api_url + '/api/auth/login/';
  private userUrl = environment.api_url + '/api/v1/user/?user_id=';

  tokens = this.http.post(this.loginUrl, this.user).subscribe((data) => {
    let tokens = data;
    return tokens;
  });

  constructor(private http: HttpClient, private data: LoginComponent) {}

  isAuthenticated() {
    // Write function here that tests user return
    let user_id = 1
    return this.http.get(this.userUrl+user_id+'/').subscribe((data:User)=> {
      let isAuthenticated = data.is_active
      return isAuthenticated
    })
  }
}
