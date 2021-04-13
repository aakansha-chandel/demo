import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  fruitSelectedOption = '';
  
  constructor(public dialog: MatDialog) { }

  openFruitDialog() {
    const dialogRef = this.dialog.open(DialogFruitComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.fruitSelectedOption = result;
    });
  }
  // openWelcomeDialog(){
  //   this.dialog.open(DialogWelcomeComponent);
  // }
  openDialog() {
    const dialogRef = this.dialog.open(DialogWelcomeComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openTajDialog(){
    this.dialog.open(DialogTajmahalComponent);
  }

  ngOnInit(): void {
  }
}

@Component({
  selector: 'dialog-fruit',
  templateUrl: 'dialog-fruit.html',
})
export class DialogFruitComponent {}

@Component({
  selector: 'dialog-welcome',
  templateUrl: 'dialog-welcome.html',
})
export class DialogWelcomeComponent {}

@Component({
  selector: 'dialog-tajmahal',
  templateUrl: 'dialog-tajmahal.html',
})
export class DialogTajmahalComponent {
  constructor(public dialog: MatDialog) {}

  showInStackedDialog() {
    this.dialog.open(DialogTajmahalComponent);
  }
}


