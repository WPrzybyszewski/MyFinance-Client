import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Oauth2RedirectComponent} from "./Auth/oauth2-redirect.component";
import {TransactionComponent} from "./transaction/transaction.component";

const routes: Routes = [
  {path: 'oauth2/redirect', component : Oauth2RedirectComponent},
  {path: 'TransactionsModal', component : TransactionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
