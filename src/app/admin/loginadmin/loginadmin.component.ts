import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit {
  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = 'login failed';
  nom :string[] = [];;
  constructor(private authService: AuthService,private route : Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { email, password } = this.form;
    this.authService.loginAdmin(email, password).subscribe(
      data => {
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.route.navigate(['/admin/dashboard']);
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

}
