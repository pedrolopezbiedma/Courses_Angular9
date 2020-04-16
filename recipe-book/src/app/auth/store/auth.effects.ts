import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { LOGIN_START, SIGNUP_START, AUTH_SUCCESS, StartLogInAction, AuthSuccessAction, AuthErrorAction } from './auth.actions';

class UserResponse {
    email: string;
    localId: string;
    idToken: string;
    expiresIn: number;
  }

@Injectable()
export class AuthEffects {

    constructor(
        private actions: Actions, 
        private httpClient: HttpClient, 
        private router: Router
    ){ }

    @Effect()
    authLogin = this.actions.pipe(
        ofType(LOGIN_START),
        switchMap((authData: StartLogInAction) => {
            return this.httpClient.post<UserResponse>(
                'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDFmhNLSsVYU0QMNLkTZldD5jBqxTpoSN8',
                {
                    email: authData.email,
                    password: authData.password,
                    returnSecureToken: true
                } 
            ).pipe(
                // Now that the request is completed, we'll treat the response
                map(responseData => {
                    // Success response
                    return this.handleAuthSuccess(responseData);
                }),
                catchError(errorResponse => {
                    // Error response
                    return this.handleAuthError(errorResponse);
                })
            )
        })
    );

    @Effect()
    authSignup = this.actions.pipe(
        ofType(SIGNUP_START),
        switchMap((authData: StartLogInAction) => {
            return this.httpClient.post<UserResponse>(
                'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDFmhNLSsVYU0QMNLkTZldD5jBqxTpoSN8',
                {
                    email: authData.email,
                    password: authData.password,
                    returnSecureToken: true
                } 
            ).pipe(
                // Now that the request is completed, we'll treat the response
                map(responseData => {
                    // Success response
                    return this.handleAuthSuccess(responseData);
                }),
                catchError(errorResponse => {
                    // Error response
                    return this.handleAuthError(errorResponse);
                })
            )
        })        
    );

    @Effect({dispatch: false})
    authNavigation = this.actions.pipe(
        ofType(AUTH_SUCCESS),
        tap(() => {
            this.router.navigate(['/']);
        })
    )

    private handleAuthSuccess(responseData: UserResponse){
        let expirationDate = new Date(new Date().getTime() + <number>responseData.expiresIn * 1000);
        return new AuthSuccessAction({ email: responseData.email, id: responseData.localId, token: responseData.idToken, expDate: expirationDate });

    }

    private handleAuthError(errorResponse){
        if(errorResponse){
            let errorMessage = '';
            if(!errorResponse.error.error || !errorResponse.error.error.message){
                errorMessage = 'An error ocurred.';
                return of(new AuthErrorAction(errorMessage));
            }

            switch (errorResponse.error.error.message) {
                case 'EMAIL_EXISTS':
                    errorMessage = 'The email address is already in use by another account.';
                    break;
            
                case 'INVALID_PASSWORD':
                    errorMessage = 'The password is invalid or the user does not have a password.';
                    break;
                    
                default:
                    errorMessage = 'An error ocurred.';
                    break;
            }
            return of(new AuthErrorAction(errorMessage));
        }  
    }
}