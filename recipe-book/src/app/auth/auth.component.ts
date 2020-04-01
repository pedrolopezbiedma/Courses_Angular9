import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  loginMode = false;
  isLoading = false;
  authError = null;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(authForm: NgForm){
    this.isLoading = true;
    this.authService.signIn(authForm.value.email, authForm.value.password)
      .subscribe(response => {
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
        this.authError = error;
      });

    authForm.reset();
  }
}
