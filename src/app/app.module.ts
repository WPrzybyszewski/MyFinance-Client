import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';

import {Oauth2RedirectComponent} from "./Auth/oauth2-redirect.component";
import {DialogContentExampleDialog, TransactionComponent} from './transaction/transaction.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatFormFieldModule} from "@angular/material";
import {MatDialogModule} from '@angular/material/dialog';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModalsComponent } from './common/comonn-modals/common-modals.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent} from "./Auth/register/register.component";
import { NgModule } from  '@angular/core';
import {MatNativeDateModule,MatIconModule,MatCheckboxModule, MatToolbarModule, MatCardModule,MatInputModule,MatRadioModule,MatListModule,} from  '@angular/material';
import {MatButtonModule} from '@angular/material/button';

import {MatDatepickerModule} from  '@angular/material/datepicker';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./Auth/auth-interceptor";



@NgModule({
  declarations: [
    AppComponent,
    Oauth2RedirectComponent,
    TransactionComponent,
    DialogContentExampleDialog,
    CommonModalsComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    // MaterialModules, ////////////added here
    BrowserModule,
    FormsModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule,
    MatFormFieldModule,
      MatInputModule,
    HttpClientModule,


    MatDialogModule,ReactiveFormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  exports: [],
  bootstrap: [AppComponent],
  entryComponents: [TransactionComponent,DialogContentExampleDialog, LoginComponent,RegisterComponent]

})
export class AppModule {

}
platformBrowserDynamic().bootstrapModule(AppModule);

