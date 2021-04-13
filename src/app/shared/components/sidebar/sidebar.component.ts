import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  index:any;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(index) {
    this.index = index;
  }

}
