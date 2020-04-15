import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { LOGIN_START, StartLogInAction, LogInAction } from './auth.actions';

class UserResponse {
    email: string;
    id: string;
    token: string;
    expiresIn: number;
  }

@Injectable()
export class AuthEffects {
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
                    let expirationDate = new Date(new Date().getTime() + <number>responseData.expiresIn * 1000);
                    return new LogInAction({ email: responseData.email, id: responseData.id, token: responseData.token, expDate: expirationDate });
                }),
                catchError(error => {
                    // Error response
                    return of();
                })
            )
        })
    );

    constructor(private actions: Actions, private httpClient: HttpClient){ }
}