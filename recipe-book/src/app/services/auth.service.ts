import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(private httpClient: HttpClient) { }
 
    signIn(email: string, password: string){
        return this.httpClient.post(
          'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDFmhNLSsVYU0QMNLkTZldD5jBqxTpoSN8',
           {
               email: email,
               password: password,
               returnSecureToken: true
           } 
        ).pipe(catchError(error => {
            let errorMessage = '';
            if(!error.error.error || !error.error.error.message){
                errorMessage = 'An error ocurred.';
                return throwError(errorMessage);
            }

            switch (error.error.error.message) {
                case 'EMAIL_EXISTS':
                    errorMessage = 'The email address is already in use by another account.';
                    break;
            
                default:
                    errorMessage = 'An error ocurred.';
                    break;
            }
            return throwError(errorMessage);
        }));
    }
}