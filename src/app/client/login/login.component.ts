import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = 'login failed';
  nom :string[] = [];;

  constructor(private authService: AuthService,private route : Router ) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    const { email, password } = this.form;
    this.authService.login(email, password).subscribe(
      data => {
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.route.navigate(['/home']);
        this.nom = data.nom;
        localStorage.setItem("email",email);
        localStorage.setItem("nom",data.nom);
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

  // logout(): void {
  //   this.authService.logout();
  //   this.isLoggedIn = false;
  //   this.reloadPage();
  // }

}
