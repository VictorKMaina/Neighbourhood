import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/user';
import { UserLogin } from "src/app/interfaces/user";
import { HttpService } from "../../services/http.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:UserLogin = {username:'', password:''}
  activeUser:any = 'No logged in user'
  
  loginUser(){
    this.activeUser = this.api.loginUser(this.user)
  }

  constructor(private api:HttpService) { }

  ngOnInit(): void {
  }

}