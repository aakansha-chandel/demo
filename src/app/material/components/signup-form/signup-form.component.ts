import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {AakanshaLibService} from 'aakansha-lib';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  constructor(public r:Router,public aakanshalib:AakanshaLibService) { }

  ngOnInit(): void {
    console.log(this.aakanshalib.date);
  }

  onSubmit(form:NgForm){
    this.r.navigate(['/layout/datepicker']);
    console.log(form.value);
  }

}
