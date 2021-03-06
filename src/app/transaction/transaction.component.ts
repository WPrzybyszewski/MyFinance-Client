import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AbstractModal} from "../abstract-modal";
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



@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})

export class TransactionComponent extends  AbstractModal{

   MODALS = {
    testDialog: DialogContentExampleDialog

  };
  constructor(public dialog: MatDialog) {super(dialog)
  }

  // openDialog(name: string) {
  //   console.log('open Dialog ' + name);
  //   const dialogRef = this.dialog.open(MODALS[name]);
  //
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  //  }
}

