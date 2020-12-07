import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserReg } from 'src/app/class/user-reg';
import { RegistrationService } from 'src/app/services/registration.service';

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
  new_user: UserReg;

  constructor(private service: RegistrationService, private router: Router) { }

  ngOnInit(): void {
  }
  OnSubmit() {
    this.new_user = new UserReg();
    this.new_user.email = this.email;
    this.new_user.first_name = this.first_name;
    this.new_user.last_name = this.last_name;
    this.new_user.username = this.username;
    this.new_user.password = this.password;
    this.service.sendForm(this.new_user).subscribe((response: any) => {
      //redirect to login page
      this.router.navigate(["login"])
    })
  }
}
