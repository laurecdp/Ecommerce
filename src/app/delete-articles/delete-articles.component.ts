import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-articles',
  templateUrl: './delete-articles.component.html',
  styleUrls: ['./delete-articles.component.css']
})
export class DeleteArticlesComponent implements OnInit {

  MyList: any
  message: any

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
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

