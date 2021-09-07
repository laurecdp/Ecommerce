import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { CreationaccountComponent } from './creationaccount/creationaccount.component';

const routes: Routes = [
  {path: 'newAccount', component: CreationaccountComponent},
  {path: 'login', component: AuthentificationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
