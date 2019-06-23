import {Component, Inject, OnInit} from '@angular/core';
import {AbstractModal} from "../../abstract-modal";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import  {AuthService} from "../Service/auth.service";
import {HttpErrorResponse} from "@angular/common/http";

export class SignUpRequest {
  name: string;
  surname: string;
  address: string;
  email: string;

}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent extends AbstractModal implements OnInit {

  //form: FormGroup;
  tittle: string;
  name: string;
  message: string;
  signUpRequest: SignUpRequest;
  error: HttpErrorResponse;
  constructor(
    public dialog: MatDialog,
  public  authService: AuthService) {
    super(dialog)
    this.signUpRequest = new SignUpRequest();
  }

  ngOnInit() {
  }

   send(): void {
      this.authService.registerUser(this.signUpRequest)
      .subscribe(
         (val) => {
           console.log("POST call successful value returned in body",
             val);
           this.message = "User Registered Successfully"
           this.dialog.closeAll();
           alert("User Registered Successfully");
         },
         response => {
           console.log("POST call in error", response);
           this.error = response;
           this.message ="Error" + this.error.error.message;
         },
         () => {
           console.log("The POST observable is now completed.");
         });
     ;
   }


}

  // @Component({
  //   templateUrl: './register.component.html',
  //   styleUrls: ['./register.component.css']
  // })
  //
  // export class DialogOverviewExampleDialog {
  //
  // constructor(
  //   public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
  //   @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  //
  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

//}
