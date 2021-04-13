import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any[]=[];
  url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private r:ActivatedRoute, private http:HttpClient) { 
  }

  ngOnInit() {
    this.users = this.r.snapshot.data.users;
  }

  getUsersInfo() {
    this.r.data.subscribe((data: {users:any})=>{
      this.users = data.users;
    })
  }

}
