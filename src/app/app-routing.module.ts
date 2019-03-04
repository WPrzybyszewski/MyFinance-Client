import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Oauth2RedirectComponent} from "./oauth2-redirect/oauth2-redirect.component";

const routes: Routes = [
  {path: 'oauth2/redirect', component : Oauth2RedirectComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
