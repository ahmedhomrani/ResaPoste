import { Component, OnInit } from '@angular/core';
import { AdmindashboardService } from 'src/app/Services/admindashboard.service';

@Component({
  selector: 'app-ajtmanager-dialog',
  templateUrl: './ajtmanager-dialog.component.html',
  styleUrls: ['./ajtmanager-dialog.component.css']
})
export class AjtmanagerDialogComponent implements OnInit {

  manager : any ={
    codepostal : null,
    nom : null,
    email: null,
    password : null,
    service : null
  }
  errorMessage = 'ajout failed';
  message = 'ajout avec succés';

  constructor(private admin : AdmindashboardService) { }

  ngOnInit(): void {
  }

  valider(): void{
    const { codepostal,nom,email,password,service } = this.manager;
    this.admin.ajoutermanager(codepostal,nom,email,password,service).subscribe(
      data => {
        this.message = data.message;
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );

  }

}
