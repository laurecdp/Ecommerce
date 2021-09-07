import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetArticleListComponent } from './get-article-list/get-article-list.component';

const routes: Routes = [
  {path:'articles', component:GetArticleListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
