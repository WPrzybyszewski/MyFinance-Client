import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material";




@Component({
  selector: 'dialog-content-example-dialog',
  template: `
    <mat-dialog-content class="mat-typography">
    <div class="modal-content">

    <div class="login-form">
      <form action=" " method="post">
        <h2 class="text-center">Sign in</h2>
        <div class="text-center social-btn">

          <a
            href="http://localhost:8080/oauth2/authorize/google?redirect_uri=http://localhost:4200/oauth2/redirect"
            class="btn btn-danger btn-block"><i class="fa fa-google"></i> Sign in with <b>Google</b></a>

        </div>
        <div class="or-seperator"><i>or</i></div>
        <div class="form-group">
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-user"></i></span>
            <input type="text" class="form-control" name="username" placeholder="Username" required="required">
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-lock"></i></span>
            <input type="password" class="form-control" name="password" placeholder="Password"
                   required="required">
          </div>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-success btn-block login-btn">Sign in</button>
        </div>
        <div class="clearfix">
          <label class="pull-left checkbox-inline"><input type="checkbox"> Remember me</label>
          <a href="#" class="pull-right text-success">Forgot Password?</a>
        </div>

      </form>
      <div class="hint-text small">Don't have an account?     <button type="button" class="btn btn-info btn-sm" (click)="open('registerModal')">
        Register
      </button></div>
    </div>
  </div>
    </mat-dialog-content>
  `
})
export class DialogContentExampleDialog {}

const MODALS = {
  testDialog: DialogContentExampleDialog,
};

@Component({
  selector: 'app-comonn-modals',
  templateUrl: './common-modals.component.html',
  styleUrls: ['./common-modals.component.css']
})
export class CommonModalsComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  openDialog(name: string) {
    const dialogRef = this.dialog.open(MODALS[name]);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

    ngOnInit()
    {
    }


}
