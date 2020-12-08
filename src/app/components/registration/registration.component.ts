import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from "../../class/user";
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  new_user = new User(0, '', '', '', '', '');
  // errors = {};

  constructor(private register: RegistrationService, private router: Router) {}

  ngOnInit(): void {}

  submit() {
    return this.register.sendForm(this.new_user)
  }
}
