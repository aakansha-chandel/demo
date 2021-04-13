import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  sideBarOpen = false;
  public users:any[] = [];
  constructor(public route:ActivatedRoute) {
   
   }
  ngOnInit() {
    console.log('layout page');
    this.users = this.route.snapshot.data.users;
  
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
