import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginService } from "../services/login.service";
import { User } from "../interfaces/user";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: User;
  userUrl = environment.api_url + '/api/v1/user/?user_id=';

  constructor(private http: HttpClient, private loginService:LoginService) {}

  isAuthenticated():boolean {
    let user_id = 1
    let access_token = localStorage.getItem('access_token')
    let token_header = {"Authorization":`Bearer ${access_token}`}

    try {
      this.http.get(this.userUrl+user_id, {headers: token_header}).subscribe((data:User) => {
        this.user = data;
    })

      return this.user.is_active

    } catch (error) {
      console.error(error)
      return false;
    }
  }
}
