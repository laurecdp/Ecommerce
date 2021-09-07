import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationaccountComponent } from './creationaccount/creationaccount.component';

const routes: Routes = [
  {path: 'newAccount', component: CreationaccountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
