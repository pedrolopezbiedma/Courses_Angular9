import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';

import * as fromApp from '../store/app.reducer';
import { StartLogInAction, StartSignupAction, ClearErrorAction } from './store/auth.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {
  loginMode = false;
  isLoading = false;
  authError = null;
  authSubscription = new Subscription();

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.authSubscription = this.store.select('auth')
      .subscribe(storeData => {
        this.isLoading = storeData.isLoading;
        storeData.loginError ? this.authError = storeData.loginError : this.authError = null;

      })

  }

  ngOnDestroy(){
    this.authSubscription.unsubscribe();
  }

  onSubmit(authForm: NgForm){
    this.isLoading = true;

    if(this.loginMode){
      this.store.dispatch(new StartLogInAction(authForm.value.email, authForm.value.password));
    }
    else{
      this.store.dispatch(new StartSignupAction(authForm.value.email, authForm.value.password));
    }
    authForm.reset();

  }

  onHandleClose(){
    this.store.dispatch(new ClearErrorAction());
  }
}
