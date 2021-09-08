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
  article:Article = new Article()
  id:any
  message:any

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id
    });
    this.http.get<Article>("http://localhost:63505/api/Articles/" + this.id).subscribe(
    response => {
      this.article = response
    })
  }

  update()
  {
    const body = JSON.stringify(this.article);
    this.http.put<Article>("http://localhost:63505/api/Articles/" + this.id, body, {
    headers: new HttpHeaders({ "Content-Type": "application/json"})
  }).subscribe(response => {
    this.message = "CONTACT MIS A JOUR";
    console.log(response);
  },err => {
    console.log(err)
  });
  }

}
