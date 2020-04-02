import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  loginMode = false;
  isLoading = false;
  authError = null;
  observable = new Observable();

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(authForm: NgForm){
    this.isLoading = true;

    if(this.loginMode){
      this.observable = this.authService.logIn(authForm.value.email, authForm.value.password)
    }
    else{
      this.observable = this.authService.signIn(authForm.value.email, authForm.value.password)
    }

    this.observable
      .subscribe(response => {
        this.isLoading = false;
        this.router.navigate(['recipes-book'])
      },
      error => {
        this.isLoading = false;
        this.authError = error;
      });
      authForm.reset();
  }
}
