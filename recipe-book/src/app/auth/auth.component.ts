import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';

import * as fromApp from '../store/app.reducer';
import { StartLogInAction, StartSignupAction } from './store/auth.actions';

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

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {

    this.store.select('auth')
      .subscribe(storeData => {
        this.isLoading = storeData.isLoading;
        if(storeData.loginError){
          this.authError = storeData.loginError
        }
        //console.log(storeData);
      })
  }

  onSubmit(authForm: NgForm){
    this.isLoading = true;

    if(this.loginMode){
      //this.observable = this.authService.logIn(authForm.value.email, authForm.value.password)
      this.store.dispatch(new StartLogInAction(authForm.value.email, authForm.value.password));
    }
    else{
      //this.observable = this.authService.signIn(authForm.value.email, authForm.value.password)
      this.store.dispatch(new StartSignupAction(authForm.value.email, authForm.value.password));
    }

    authForm.reset();
  }

  onHandleClose(){
    this.authError = null;
  }
}
