import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserver',
  templateUrl: './reserver.component.html',
  styleUrls: ['./reserver.component.css']
})
export class ReserverComponent implements OnInit {

  nb:any=1;
   reservation : any = {
    service : null,
    place : null,
    date : null
   }
   statuscolor : any = "btn btn-warning";

  constructor() { }

  ngOnInit(): void {
    if (this.reservation.status == "en attente"){
      this.statuscolor = "btn btn-warning";
    }
    else if (this.reservation.status == "accepté"){
      this.statuscolor = "btn btn-success";
    }
    else if (this.reservation.status == "refusé"){
      this.statuscolor = "btn btn-danger";
    }
  }
  

}
