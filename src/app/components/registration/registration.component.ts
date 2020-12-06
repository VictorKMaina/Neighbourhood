import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
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
  new_user: any;

  constructor(private service: RegistrationService) { }

  ngOnInit(): void {
  }
  OnSubmit() {
    this.new_user = new UserReg(this.username, this.first_name, this.last_name, this.email, this.password);
    this.service.sendForm(this.new_user).subscribe((response : any) => {
    console.log('Data', response)
    this.new_user=response.data;
    })
  }
}
