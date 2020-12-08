import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../class/user';
import { catchError } from "rxjs/operators";
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {

  errors;

  private handleError(error: HttpErrorResponse) {
    this.errors = error.error
    return throwError(error.error);
  }

  sendForm(user) {
    this.http.post<User>('http://neighbourhood-back.herokuapp.com/api/auth/signup/', user).toPromise()
    .then(res=>{}, rej=>{})
  }
  constructor(private http: HttpClient) {}
}
