import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SnackbarContentComponent } from '../snackbar-content/snackbar-content.component';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {
  durationInSeconds=5;

  constructor(private snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar() {
    this.snackbar.openFromComponent(SnackbarContentComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  openSnackBar1(message: string, action: string) {
    this.snackbar.open(message, action, {
      duration: 2000,
    });
  }

}
