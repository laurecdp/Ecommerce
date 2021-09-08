import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newarticle',
  templateUrl: './newarticle.component.html',
  styleUrls: ['./newarticle.component.css']
})
export class NewarticleComponent implements OnInit {

  info = {titre: '', description: '', prix: 0, image: ''}
  message: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  newarticle() {
    const body = JSON.stringify(this.info);

    this.http.post("http://localhost:50788/api/articles", body, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    })
    .subscribe(response => {
      this.message = "ARTICLE CREE";
      console.log(response);
    }, err => {
      console.log(err)
    });

  }

}
