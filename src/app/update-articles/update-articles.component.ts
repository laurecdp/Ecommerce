import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../article';

@Component({
  selector: 'app-update-articles',
  templateUrl: './update-articles.component.html',
  styleUrls: ['./update-articles.component.css']
})

export class UpdateArticlesComponent implements OnInit {

  article : any
  id : any
  message : any

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {

    if(sessionStorage.getItem("auth") == null || sessionStorage.getItem("admin") == null) {
      window.location.href='http://localhost:4200/';
    }

    this.route.params.subscribe(params => {
      this.id = params.id
    });

    this.http.get("http://localhost:50788/api/Articles/" + this.id)
    .subscribe( response => {
        console.log(response);
        this.article = response
    })

  }

  update() {
    const body = JSON.stringify(this.article);
    this.http.put<Article>("http://localhost:50788/api/Articles/" + this.id, body, {
      headers: new HttpHeaders({ "Content-Type": "application/json"})
    }).subscribe(response => {
      this.message = "CONTACT MIS A JOUR";
      console.log(response);
    },err => {
      console.log(err)
    });
  }

}
