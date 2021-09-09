import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-article-list',
  templateUrl: './get-article-list.component.html',
  styleUrls: ['./get-article-list.component.css']
})
export class GetArticleListComponent implements OnInit {

  MyList: any;
  message:any
  admin:string;

  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    if(sessionStorage.getItem("admin")) this.admin = "1";
    else this.admin = null;

    this.reload();
  }

  reload() {
    this.http.get("http://localhost:50788/api/Articles/").
    subscribe(
      response => {
        this.MyList = response;
      },
      err => {
        console.log("Erreur")
        this.message = "erreur!"
      }
    )
  }

  delete(id) {
    this.http.delete("http://localhost:50788/api/Articles/" + id).
    subscribe(
      response => {
        this.MyList = response;
        this.reload();
        this.message = "article supprimé"
      },
      err => {
        console.log("Erreur")
        this.message = "erreur!"
      }
    )
  }

}
