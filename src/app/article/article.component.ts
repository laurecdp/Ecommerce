import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../article';
import { Ligne } from '../ligne';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: any;
  id: any;
  message: string;

  info = {
    id_username : sessionStorage.getItem("auth"),
    id_article : 0,
    quantite : 0
  }

  quantity: number;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });

    this.http.get("http://localhost:50788/api/articles/" + this.id)
    .subscribe(
      response => {
        console.log(response);
        this.article = response;
      }
    );
  }

  AddToCart() {

    this.info.id_article = this.id;
    this.info.id_username = sessionStorage.getItem("auth");
    this.info.quantite = this.quantity;

    const body = JSON.stringify(this.info);
    console.log(body);

    this.http.post("http://localhost:50788/api/Panier/", body, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    })
    .subscribe(response => {
      this.message = "Ajouté au panier avec succès";
    }, err => {
    });

  }
}
