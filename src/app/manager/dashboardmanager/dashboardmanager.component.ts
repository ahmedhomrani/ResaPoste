import { Component, OnInit } from '@angular/core';
import { ManagerdashboardService } from 'src/app/Services/managerdashboard.service';

@Component({
  selector: 'app-dashboardmanager',
  templateUrl: './dashboardmanager.component.html',
  styleUrls: ['./dashboardmanager.component.css']
})
export class DashboardmanagerComponent implements OnInit {

  name : string ="ahmed homrani";
  reservation: any = {
    nom: null,
    Date: null,
    time : null,
  };
  statuscolor : any = "btn btn-warning";
  length : any =0;
  cards : any;
  codepostal : any= localStorage.getItem('codepostal');
  service :any= localStorage.getItem('service');

  constructor(private manager:ManagerdashboardService) { }

  ngOnInit(): void {
    this.manager.getRservation(this.codepostal,this.service).subscribe(
      data => {
        this.cards = data;
        this.length = data.length;
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

}
