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

export class ManagerdashboardService {



  constructor(private http:HttpClient) { }

  getRservation(codepostal:string,service : string): Observable<any> {
    return this.http.get(AUTH_API + 'reservation', {
    });
  }

}
