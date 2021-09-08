import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { Ligne } from '../ligne';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  lignes: any;
  message: any;
  username: string = sessionStorage.getItem("auth");;

  constructor(private http:HttpClient) {

    if(sessionStorage.getItem("auth") == null) {
      window.location.href='http://localhost:4200/login';
    }

    this.http.get("http://localhost:50788/api/Panier/?username=" + this.username)
    .subscribe(
      response => {
        this.lignes = response;
        console.log(response);
      },
      err => {
        console.log("*KO")
        this.message = "Problème!!"
      }
    );
  }

  delete(id) {
    this.http.delete("http://localhost:50788/api/Panier/DeleteArticle/?id=" + id).
    subscribe(
      response => {
        this.message = "article supprimé"
        window.location.reload();
      },
      err => {
        console.log("Erreur")
        this.message = "erreur!"
      }
    )
  }

  ngOnInit(): void {
  }

}
