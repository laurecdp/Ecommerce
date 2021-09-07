import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article;
  id: any;
  message: string;
  quantity: number;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });

    this.http.get<Article>("http://localhost:50788/api/articles/" + this.id)
    .subscribe(
      response => {
        this.article = response;
      }
    );
  }

  AddToCart() {
    var username = sessionStorage.getItem("user");

    // Id article ==> this.id

    // Do something with card

  }
}
