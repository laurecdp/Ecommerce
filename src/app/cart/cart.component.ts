import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { Ligne } from '../ligne';

class ArticleResult {
  ID : number;
  Prix : number;
  Titre : string;
  Description : string;
  Image : string;
}

class LigneResult {
  ID : number;
  Quantite : number;
  Article : ArticleResult;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  lignes: Array<Ligne>;
  message: any;
  username: string = sessionStorage.getItem("auth");
  prix_total_HT : number = 0;
  prix_total : number = 0;

  constructor(private http:HttpClient) {

    if(sessionStorage.getItem("auth") == null) {
      window.location.href='http://localhost:4200/login';
    }

    this.http.get<Array<LigneResult>>("http://localhost:50788/api/Panier/?username=" + this.username)
    .subscribe(
      response => {
        this.lignes = new Array<Ligne>();
        response.forEach(element => {
          const ligne = new Ligne();
          ligne.id = element.ID;
          ligne.quantite = element.Quantite;
          ligne.article = new Article();
          ligne.article.id = element.Article.ID;
          ligne.article.titre = element.Article.Titre;
          ligne.article.description = element.Article.Description;
          ligne.article.prix = element.Article.Prix;
          ligne.article.image = element.Article.Image;
          this.lignes.push(ligne);

          this.prix_total += element.Article.Prix;

        });

        this.prix_total_HT = (80/100 * this.prix_total);
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
