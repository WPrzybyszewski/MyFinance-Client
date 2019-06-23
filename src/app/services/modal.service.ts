import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material";
import {LoginComponent} from "../Auth/login/login.component";
import { RegisterComponent} from "../Auth/register/register.component";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(public dialog: MatDialog) { }

  openLoginModal()
  {
    const dialogRef = this.dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('After Close Modal', result);
    });
  }

  openRegisterModal()
  {
    //const dialogRef = this.dialog.open(RegisterComponent);
    const dialogRef = this.dialog.open(RegisterComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('After Close Modal', result);
    });
  }


  // openConfirmModal(message: string, callBackFunction: Function) {
  //   const dialogRef = this.dialog.open(ConfirmComponent, {
  //     width: '300px',
  //     data: new ModalConfirmData({
  //       title: 'CONFIRM',
  //       content: message,
  //       confirmButtonLabel: 'Confirm',
  //       closeButtonLabel: 'Close'
  //     })
  //   });
  //
  //   dialogRef.afterClosed().subscribe(result => callBackFunction(result));

}
