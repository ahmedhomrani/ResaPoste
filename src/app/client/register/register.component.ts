import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  person: any = {
    nom: null,
    prenom: null,
    cin : null,
    tel: null,
    email: null,
    password: null
  };
  errorMessage = 'registration failed';

  constructor(private authService: AuthService,private route : Router) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    const {nom,email, password,prenom,cin} = this.person;
    this.authService.register(nom,prenom,cin,email, password).subscribe(
      data => {
        this.route.navigate(['/login']);
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );
  }
  reloadPage(): void {
    window.location.reload();
  }

}
