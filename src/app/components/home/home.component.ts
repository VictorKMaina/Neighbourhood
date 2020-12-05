import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { Hood } from 'src/app/hood';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hoods: Hood[] = [
    new Hood(user: 'Jeff', hood: 'Juja', content: 'Lorem ipsum dolor')

  ];


  constructor() { }

  ngOnInit(): void {
  }

}



