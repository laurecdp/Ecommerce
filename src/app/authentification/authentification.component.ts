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
  user: User
  auth: string

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  login()
  {
    console.log("Login : " + this.username);
    console.log("Pass : " + this.password);
    this.http.get<User>("https://localhost:44330/api/users/Connection?username=" + this.username + "&password=" + this.password).
    subscribe(
      response => {
        this.user = response
        sessionStorage.setItem("auth", this.user.username)
        window.location.href='http://localhost:4200/';
      },
      err => {
        console.log("Erreur")
        this.message = "erreur!"
      }
    )
  }

}
