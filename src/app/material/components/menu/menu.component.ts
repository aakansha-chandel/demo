import { Component, OnInit } from '@angular/core';
import {AakanshaLibService} from 'aakansha-lib';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  subscription: Subscription;
  fname: any[] = [];
  lname: any[] =[];
  initials: any[] = [];
  name: any;

  constructor(public aakanshaLib:AakanshaLibService) {
    // this.getIntials();
    console.log(this.aakanshaLib.sendFirstName(name))
    this.subscription = this.aakanshaLib.getInitials().subscribe(message => {
      if (message) {
        this.initials.push(message);
      } else {
        // clear messages when empty message received
        this.initials = [];
      }
      console.log(this.initials)
    });
   }

  ngOnInit(): void {
    console.log(this.aakanshaLib.date);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
 

}
