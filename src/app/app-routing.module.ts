import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetArticleListComponent } from './get-article-list/get-article-list.component';
import { CreationaccountComponent } from './creationaccount/creationaccount.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  {path: 'newAccount', component: CreationaccountComponent},
  {path: 'article/:id', component: ArticleComponent},
  {path:'articles', component:GetArticleListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
