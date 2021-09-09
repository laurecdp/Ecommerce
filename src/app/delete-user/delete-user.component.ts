import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  Mylist:any;
  message: any;

  constructor(private http:HttpClient) {
    if(sessionStorage.getItem("auth") == null) {
      window.location.href='http://localhost:4200/login';
    }
   }

  ngOnInit(): void {
    this.charger();
  }

  charger(){
    this.http.get<Array<User>>("http://localhost:50788/api/Users").subscribe(
      reponse=>{
        this.Mylist = reponse;
      },
      err => {
        console.log("*KO");
        this.message = "Problème!!";
      }
    );
  }

  delete(id) {
    this.http.delete("http://localhost:50788/api/Users/?username=" + id).
    subscribe(
      response => {
        this.Mylist = response;
        this.message = "article supprimé"
        this.charger()
      },
      err => {
        console.log("Erreur")
        this.message = "erreur!"
      }
    )
  }
}
