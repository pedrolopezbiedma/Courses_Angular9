import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(private httpClient: HttpClient) { }
 
    signIn(email: string, password: string){
        this.httpClient.post(
          'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDFmhNLSsVYU0QMNLkTZldD5jBqxTpoSN8',
           {
               email: email,
               password: password,
               returnSecureToken: true
           } 
        ).subscribe(response => {
            console.log(response);
        })
    }
}