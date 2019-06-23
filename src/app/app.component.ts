import {Component, OnInit} from '@angular/core';
import {ModalService} from "./services/modal.service";
import {JwtHelperService} from "@auth0/angular-jwt";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MyFinance-Client';

 // loggedUser : ;

  ngOnInit(): void {
    console.log('on init')
  }

  constructor(    private modalService: ModalService
  ) {

  }

  openLogin()
  {
    this.modalService.openLoginModal();
  }
  openRegister()
  {
    this.modalService.openRegisterModal();
  }

  isLogged(): boolean{
    const helper = new JwtHelperService();
    const token = localStorage.getItem("accessToken");

    if(token== null || helper.isTokenExpired(token))
    {
      console.log("false")
      return false;
    }
    else
    {
      console.log("true")

      return true;
    }

  }
}


