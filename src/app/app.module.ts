import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CreationaccountComponent } from './creationaccount/creationaccount.component';
import { GetArticleListComponent } from './get-article-list/get-article-list.component';
import { ArticleComponent } from './article/article.component';
import { FormsModule } from '@angular/forms';
import { AuthentificationComponent } from './authentification/authentification.component';
import { UpdateArticlesComponent } from './update-articles/update-articles.component';
import { NewarticleComponent } from './newarticle/newarticle.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    CreationaccountComponent,
    GetArticleListComponent,
    ArticleComponent,
    AuthentificationComponent,
    UpdateArticlesComponent,
    NewarticleComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
