import { Component, NgModule, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';



@Component({
   selector: 'app-homepage',
templateUrl: './homepage.component.html',
styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
   logochemin="assets/images/logo.png";

  

   today = new Date();

   range = new FormGroup({  
    start: new FormControl(null, Validators.required),  
    end: new FormControl(null, Validators.required)  
  })  

  dateFilterFn = (date: Date)=> ![0,6].includes(date.getDay()); 

  maxDate = this.today.setMonth(this.today.getMonth()+1);

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  chercher() : any{
    this.route.navigate(['/client/reserver']);
  }

}
