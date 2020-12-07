import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Tokens } from '../interfaces/tokens';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  private loginUrl = environment.api_url + '/api/auth/login/';
  private userUrl = environment.api_url + '/api/v1/user?user_id=';

  storeToken(login_info) {
    try {
      let tokens = this.http.post(this.loginUrl, login_info).subscribe((data: Tokens) => {
        localStorage.setItem('access_token', data.access);
        localStorage.setItem('refresh_token', data.refresh);
      });
      //console.log(localStorage.getItem('access_token'))
      this.getUserDetails();
      return tokens;
    } catch (error) {
      console.log("ERROR: ", error);
    }
  }

  getUserDetails() {
    let access_token = localStorage.getItem('access_token')
    let token_header = { "Authorization": `Bearer ${access_token}` }
    //decode token, save in local storage
    var decoded = jwt_decode(access_token);
    var userId = decoded["user_id"];
    //request user details
    var x = this.http.get(this.userUrl + userId, { headers: token_header }).subscribe((response) => {
      localStorage.setItem('user_details', JSON.stringify(response))
    });

  }
  constructor(private http: HttpClient) { }
}
