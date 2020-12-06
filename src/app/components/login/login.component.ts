import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/user';
import { UserLogin } from "src/app/interfaces/userLogin";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user:UserLogin = {username:'', password:''}

  constructor() { }

  ngOnInit(): void {
  }

}