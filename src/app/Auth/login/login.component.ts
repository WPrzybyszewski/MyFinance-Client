import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {LoginRequest} from "../model/login-request";
import {AuthService} from "../Service/auth.service";
import {MatDialog} from "@angular/material";
import {AbstractModal} from "../../abstract-modal";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends AbstractModal implements OnInit {

  loginRequest: LoginRequest;
  info: string;
  @ViewChild('closeLoginModal') closeLoginModal: ElementRef;

  constructor(public authService: AuthService,
              public dialog: MatDialog) {
    super(dialog)
    this.loginRequest = new LoginRequest();
}
  ngOnInit() {
  }

  public login()
  {
    this.authService.login(this.loginRequest);
    this.authService.getLoggedUser();
    this.dialog.closeAll();
  }

}
