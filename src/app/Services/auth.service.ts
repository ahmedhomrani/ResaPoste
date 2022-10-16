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
export class AuthService {

  constructor(private http: HttpClient) { }
  
  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      email,
      password
    }, httpOptions);
  }
  
register(nom: string, email: string, password: string, prenom: string, cin: number): Observable<any> {
   return this.http.post(AUTH_API + 'register', {
   nom,
   email,
    password,
    prenom,
    cin
   }, httpOptions);
  }

  loginAdmin(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'loginadmin', {
      email,
      password
    }, httpOptions);
  }

  loginManager(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'loginmanager', {
      email,
      password
    }, httpOptions);
  }

}
