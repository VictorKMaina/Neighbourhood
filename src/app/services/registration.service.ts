import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../class/user';
import { catchError } from "rxjs/operators";
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  api_url = `${environment.api_url}api/auth/signup/`;


  sendForm(user) {
    this.http
      .post<User>(this.api_url, user)
      .toPromise()
      .then(
        (res) => {},
        (rej) => {}
      );
  }
  constructor(private http: HttpClient) {}
}
