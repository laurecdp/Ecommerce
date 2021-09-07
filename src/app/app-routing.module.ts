import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationaccountComponent } from './creationaccount/creationaccount.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  {path: 'newAccount', component: CreationaccountComponent},
  {path: 'article/:id', component: ArticleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
