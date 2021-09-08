import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetArticleListComponent } from './get-article-list/get-article-list.component';
import { CreationaccountComponent } from './creationaccount/creationaccount.component';
import { ArticleComponent } from './article/article.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { UpdateArticlesComponent } from './update-articles/update-articles.component';

const routes: Routes = [
  {path: 'newAccount', component: CreationaccountComponent},
  {path: 'article/:id', component: ArticleComponent},
  {path:'articles', component:GetArticleListComponent},
  {path:'login', component:AuthentificationComponent},
  {path:'update_article/:id', component:UpdateArticlesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
