import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css']
})
export class GridListComponent implements OnInit {

  dir='assets/7Wonders/';
  images:any[]=[];

  names:string[]=['Taj Mahal','Colosseum','Machu Picchu','Christ the Redeemer','Chichen Itza','Petra','Great Wall of China'];

  wonders:any[]=[{
    first:'Taj Mahal',
    second:'Colosseum'
  }];

  constructor() {
    for(let i=1;i<=7;i++){
      this.images.push({
        title: i,
        src:this.dir+i+'.jpeg'
      });
     }
     console.log(this.images);
    }
  ngOnInit(): void {
  }

}
