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

  constructor(private http:HttpClient) { 

    this.http.get("https://localhost:44330/api/Articles").subscribe(
      reponse=>{
        this.MyList = reponse;
      },
      err => {
        console.log("*KO")
        this.message = "Problème!!"
      }
    );
  }
  ngOnInit(): void {
  }

}
