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

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(authForm: NgForm){
    this.authService.signIn(authForm.value.email, authForm.value.password);
    authForm.reset();
  }
}
