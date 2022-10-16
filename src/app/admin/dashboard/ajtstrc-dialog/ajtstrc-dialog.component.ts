import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AdmindashboardService } from 'src/app/Services/admindashboard.service';

@Component({
  selector: 'app-ajtstrc-dialog',
  templateUrl: './ajtstrc-dialog.component.html',
  styleUrls: ['./ajtstrc-dialog.component.css']
})
export class AjtstrcDialogComponent implements OnInit {

  structure: any = {
    nom : null,
    adresse : null,
    codepostal : null,
    tel : null,
  }

  b=true;
  errorMessage = 'ajout failed';
  message = 'ajout avec succés';
ngForm: any;
  constructor(private admin : AdmindashboardService) { }

  ngOnInit(): void {
  }
  


  valider(): void{
    const { nom, adresse, codepostal, tel } = this.structure;
    this.admin.ajouterstructure(nom, adresse, codepostal, tel).subscribe(
      data => {
        this.message = data.message;
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );

  }

}
