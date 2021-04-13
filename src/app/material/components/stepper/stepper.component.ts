import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { CdkDragDrop,moveItemInArray } from '@angular/cdk/drag-drop';



interface MatTree{
  name:string;
  children?:MatTree[];
}
const Data:MatTree[]=[
  {
    name:'Collections',
    children:[
      {
        name:'Colours',
        children:[
          {name:'Green'},
          {name:'Blue'},
        ]
      },{
        name:'Fruits',
        children:[
          {name:'Apple'},
          {name:'Grapes'},
        ]
      },
    ]
  },
];

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  public lists: any[] = [
    {name: 'one '}, 
    {name: 'two'},
    {name: 'three'},
    {name: 'four'}
  ];

  FormOne:FormGroup;
  FormTwo:FormGroup;
  isLinear=false;

 

  treeControl = new NestedTreeControl<MatTree>(node => node.children);
  dataSource = new MatTreeNestedDataSource<MatTree>();

  constructor(private fb:FormBuilder) { 
    this.dataSource.data = Data;
  }

  ngOnInit(): void {
    this.FormOne=this.fb.group({
      name:['',Validators.required]
    });
    this.FormTwo=this.fb.group({
      address:['', Validators.required]
    });
  }

  hasChild = (_: number, node: MatTree) => !!node.children && node.children.length > 0;

  drop(event: CdkDragDrop<any[]>){
    moveItemInArray(this.lists, event.previousIndex , event.currentIndex);
  }

}
