import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginmanager',
  templateUrl: './loginmanager.component.html',
  styleUrls: ['./loginmanager.component.css']
})
export class LoginmanagerComponent implements OnInit {

  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = 'login failed';
  nom :string[] = [];
  codepostal: any;
  service: any;
;

  constructor(private authService: AuthService,private route : Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { email, password } = this.form;
    this.authService.loginManager(email, password).subscribe(
      data => {
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.route.navigate(['/manager/dashboard']);
        this.nom = data.nom;
        this.service = data.service;
        this.codepostal = data.codepostal;
        localStorage.setItem("email",email);
        localStorage.setItem("nom",data.nom);
        localStorage.setItem("service",data.service);
        localStorage.setItem("codepostal",data.codepostal);

      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
    reloadPage(): void {
      window.location.reload();
    }

}
