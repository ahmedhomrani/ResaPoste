import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://192.168.1.103:8080/PostResaBackend/client/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AdmindashboardService {

  constructor(private http: HttpClient) { }
  
  getTotalReservation(): Observable<any> {
    return this.http.get(AUTH_API + 'totalreservation', {
    });
  }
  getTotalReservationaccepte(): Observable<any> {
    return this.http.get(AUTH_API + 'totalreservationaccepte', {
    });
  }
  getPendingRservation(): Observable<any> {
    return this.http.get(AUTH_API + 'pendingreservation', {
    });
  }
  getTotalStructure(): Observable<any> {
    return this.http.get(AUTH_API + 'totalstructure', {
    });
  }

  ajouterstructure(nom: string, adresse: string , codepostal:number, tel:number): Observable<any> {
    return this.http.post(AUTH_API + 'ajouterstructure', {
      nom,
      adresse,
      codepostal,
      tel
    }, httpOptions);
  }

  ajouterservice(codepostal:number, comptes: string , ChequesORV:string , Virements: string , Placements : string , Abonnements : string , Cartes : string): Observable<any> {
    return this.http.post(AUTH_API + 'ajouterservices', {
      codepostal,
      comptes,
      ChequesORV,
      Virements,
      Placements,
      Abonnements,
      Cartes
    }, httpOptions);
  }

  ajoutermanager(codepostal:number, nom: string , email:string , password: string , service : string ): Observable<any> {
    return this.http.post(AUTH_API + 'ajouterservices', {
      codepostal,
      nom,
      email,
      password,
      service
    }, httpOptions);
  }

}
