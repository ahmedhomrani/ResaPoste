import { Component, OnInit } from '@angular/core';
import { AdmindashboardService } from 'src/app/Services/admindashboard.service';

@Component({
  selector: 'app-ajtservice-dialog',
  templateUrl: './ajtservice-dialog.component.html',
  styleUrls: ['./ajtservice-dialog.component.css']
})
export class AjtserviceDialogComponent implements OnInit {

  services :any = {
    codepostal : null,
    comptes : null,
    ChequesORV : null,
    Virements : null,
    Placements : null,
    Abonnements : null,
    Cartes : null
  }
  errorMessage = 'ajout failed';
  message = 'ajout avec succés';

  constructor( private admin : AdmindashboardService) { }

  ngOnInit(): void {
  }

  valider(): void{
    const { codepostal,
      comptes,
      ChequesORV,
      Virements,
      Placements,
      Abonnements,
      Cartes } = this.services;
    this.admin.ajouterservice(codepostal,comptes,ChequesORV,Virements,Placements,
      Abonnements,
      Cartes).subscribe(
      data => {
        this.message = data.message;
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );

  }


}
