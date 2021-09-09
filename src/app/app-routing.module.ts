import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GetArticleListComponent } from './get-article-list/get-article-list.component';
import { CreationaccountComponent } from './creationaccount/creationaccount.component';
import { ArticleComponent } from './article/article.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { UpdateArticlesComponent } from './update-articles/update-articles.component';
import { NewarticleComponent } from './newarticle/newarticle.component';
import { CartComponent } from './cart/cart.component';
import { DeleteArticlesComponent } from './delete-articles/delete-articles.component';
import { HomeComponent } from './home/home.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: 'newAccount', component: CreationaccountComponent},
  {path: 'article/:id', component: ArticleComponent},
  {path: 'update_article/:id', component:UpdateArticlesComponent},
  {path: 'articles', component:GetArticleListComponent},
  {path: 'login', component:AuthentificationComponent},
  {path: 'newarticle', component:NewarticleComponent},
  {path: 'cart', component:CartComponent},
  {path: 'delete_article', component:DeleteArticlesComponent},
  {path: 'home', component:HomeComponent},
  {path: 'delete_user', component:DeleteUserComponent},
  {path: 'profile', component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
