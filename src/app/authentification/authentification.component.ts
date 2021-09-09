import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  username: string
  password: string
  message: any
  user: any
  auth: string

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  login() {
    console.log("Login : " + this.username);
    console.log("Pass : " + this.password);
    this.http.get("http://localhost:50788/api/users/Connection?username=" + this.username + "&password=" + this.password).
    subscribe(
      response => {

        console.log(response);
        this.user = response
        sessionStorage.setItem("auth", this.user.Username)
        if(this.user.Admin) {
          sessionStorage.setItem("admin", "1");
        }
        window.location.href='http://localhost:4200/';
      },
      err => {
        console.log("Erreur")
        this.message = "erreur!"
      }
    )
  }

}
