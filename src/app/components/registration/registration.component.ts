import { Component, OnInit } from '@angular/core';
import { UserReg } from 'src/app/class/user-reg';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  new_user: any;

  constructor() { }

  ngOnInit(): void {
  }
  OnSubmit() {
    this.new_user = new UserReg(this.username, this.first_name, this.last_name, this.email, this.password);
    console.log(this.new_user);
  }
}
