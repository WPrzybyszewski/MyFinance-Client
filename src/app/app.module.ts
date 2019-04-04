import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';

import {Oauth2RedirectComponent} from "./oauth2-redirect/oauth2-redirect.component";
import { TestComponentComponent } from './test-component/test-component.component';
import { TransactionComponent } from './transaction/transaction.component';



@NgModule({
  declarations: [
    AppComponent,
    Oauth2RedirectComponent,
    TestComponentComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
