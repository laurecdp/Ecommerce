import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  session : string;

  constructor() { }

  ngOnInit(): void {
    if(sessionStorage.getItem("auth")) {
      this.session = sessionStorage.getItem("auth");
    }
  }

}
