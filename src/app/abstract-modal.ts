import {MatDialog} from "@angular/material";
import {DialogContentExampleDialog} from "./transaction/transaction.component";



export abstract class AbstractModal {


  MODALS = {
    // testDialog: DialogContentExampleDialog,

  };
 protected  constructor(public dialog: MatDialog) {}

  openDialog(name: string) {
    console.log('open Dialog ' + name);
    const dialogRef = this.dialog.open(this.MODALS[name]);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
