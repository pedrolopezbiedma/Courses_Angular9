import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, Subject } from 'rxjs';

import { User } from '../models/user.model';

class UserResponse {
    email: string;
    id: string;
    token: string;
    expiresIn: number;
  }

@Injectable({providedIn: 'root'})
export class AuthService {
    authenticated = new Subject();
    token = null;

    constructor(private httpClient: HttpClient) { }
 
    signIn(email: string, password: string){
        return this.httpClient.post<UserResponse>(
          'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDFmhNLSsVYU0QMNLkTZldD5jBqxTpoSN8',
           {
               email: email,
               password: password,
               returnSecureToken: true
           } 
        ).pipe(
            catchError(this.handleError),
            tap(responseData => {
                this.handleAuthentication(responseData);
            })
        );
    }

    logIn(email: string, password: string){
        return this.httpClient.post(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDFmhNLSsVYU0QMNLkTZldD5jBqxTpoSN8',
            {
                email: email,
                password: password,
                returnSecureToken: true
            } 
            ).pipe(
                catchError(this.handleError),
                tap(responseData => {
                    this.handleAuthentication(responseData);
                })
            );
    }

    logOut(){
        this.authenticated.next(null);
    }
    
    private handleAuthentication(responseData){
        let expirationDate = new Date(new Date().getTime() + <number>responseData.expiresIn * 1000);
        let authenticatedUser = new User(responseData.email, responseData.localId, responseData.idToken, expirationDate );
        this.token = authenticatedUser.token;
        this.authenticated.next(authenticatedUser);       
    }

    private handleError(responseError: HttpErrorResponse){
        if(responseError){
            let errorMessage = '';
            if(!responseError.error.error || !responseError.error.error.message){
                errorMessage = 'An error ocurred.';
                return throwError(errorMessage);
            }

            switch (responseError.error.error.message) {
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
            return throwError(errorMessage); 
        }       
    }
}