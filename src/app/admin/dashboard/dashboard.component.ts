import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdmindashboardService } from '../../Services/admindashboard.service';
import {MatDialog} from '@angular/material/dialog';
import { AjtstrcDialogComponent } from './ajtstrc-dialog/ajtstrc-dialog.component';
import { AjtserviceDialogComponent } from './ajtservice-dialog/ajtservice-dialog.component';
import { AjtmanagerDialogComponent } from './ajtmanager-dialog/ajtmanager-dialog.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalRes:any =0;
  pendingres:any =0;
  nbstrc:any =0;
  resacc:any =0;
  name : any = "ahmed homrani";

  constructor(private route : Router , private admin : AdmindashboardService,public dialog: MatDialog) { }

  ngOnInit(): void {

    this.admin.getTotalReservation().subscribe( params => { this.totalRes = params;});
    this.admin.getPendingRservation().subscribe( params => { this.pendingres = params;});
    this.admin.getTotalStructure().subscribe( params => { this.nbstrc = params;});
    this.admin.getTotalReservationaccepte().subscribe( params => { this.resacc = params;});
    //this.name = localStorage.getItem("nom");
  }  
  openDialogAjtstrc() {
    const dialogRef = this.dialog.open(AjtstrcDialogComponent);
  }
  openDialogAjtservice() {
    const dialogRef = this.dialog.open(AjtserviceDialogComponent);
  }
  openDialogAjtmanager() {
    const dialogRef = this.dialog.open(AjtmanagerDialogComponent);
  }
  

}