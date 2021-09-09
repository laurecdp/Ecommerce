import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-creationaccount',
  templateUrl: './creationaccount.component.html',
  styleUrls: ['./creationaccount.component.css']
})
export class CreationaccountComponent implements OnInit {
  user: User = new User()
  message: any

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  create() {
    this.user.admin = 0;
    const body = JSON.stringify(this.user)
    console.log(body);
    this.http.post("http://localhost:50788/api/Users/", body, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
    })

    }).
    subscribe(response => {
      alert(this.message = "Votre compte a bien été enregistré");
        console.log(response);
      },
      err => {
        console.log(err)
    });

	}

	previous()
	{
	}

	next()
	{
	}

}


