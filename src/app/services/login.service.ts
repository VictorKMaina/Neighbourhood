import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Tokens } from '../interfaces/tokens';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  private loginUrl = environment.api_url + '/api/auth/login/';

  storeToken(login_info) {
    try {
      let tokens = this.http.post(this.loginUrl, login_info).subscribe((data:Tokens) => {
        localStorage.setItem('access_token', data.access);
        localStorage.setItem('refresh_token', data.refresh);
        });
      return tokens;
    } catch (error) {
      console.log("ERROR: ", error);
    }
  }

  constructor(private http: HttpClient) {}
}
