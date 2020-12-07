import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  sendForm(user) {
    console.log(JSON.stringify(user));

    return this.http.post("http://neighbourhood-back.herokuapp.com/api/auth/signup/", user)
  }

  constructor(private http: HttpClient) { }
}
