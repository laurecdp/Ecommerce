import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any
  username:any
  message:any

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    if(sessionStorage.getItem("auth") == null) {
      window.location.href='http://localhost:4200/login';
    }
   }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.username = params.username
    });
    this.http.get("http://localhost:50788/api/Users/?username=" + this.username).subscribe(
    response => {
      this.user = response
    })
  }

  update()
  {
    const body = JSON.stringify(this.user);
    this.http.put<User>("http://localhost:50788/api/Users/?username=" + this.username, body, {
    headers: new HttpHeaders({ "Content-Type": "application/json"})
  }).subscribe(response => {
    this.message = "CONTACT MIS A JOUR";
    console.log(response);
  },err => {
    console.log(err)
  });
  }

}
