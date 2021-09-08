import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjetECommerce';

  session = sessionStorage.getItem("auth");


  logout() {
    sessionStorage.clear();
    console.log("clean");
    window.location.href='http://localhost:4200/login/';
  }
}
