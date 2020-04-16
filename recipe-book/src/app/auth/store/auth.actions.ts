import { Action } from '@ngrx/store';

export const LOGIN_START = 'LOGIN_START';
export const SIGNUP_START = 'SIGNUP_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_ERROR = 'AUTH_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const LOG_OUT = 'LOG_OUT';

export class StartLogInAction implements Action {
    readonly type = LOGIN_START;
    constructor(public email: string, public password: string ){}
}

export class StartSignupAction implements Action {
    readonly type = SIGNUP_START;
    constructor(public email: string, public password: string ){}
}

export class AuthSuccessAction implements Action {
    readonly type = AUTH_SUCCESS;
    constructor( 
        public user: { email: string, id: string, token: string, expDate: Date } 
    ){}
}

export class AuthErrorAction implements Action {
    readonly type = AUTH_ERROR;
    constructor(public error: string){}
}

export class ClearErrorAction implements Action {
    readonly type = CLEAR_ERROR;
    constructor(){}
}

export class LogOutAction implements Action {
    readonly type = LOG_OUT;
    constructor(){}

}

export type AuthActions = StartLogInAction | StartSignupAction | AuthSuccessAction | AuthErrorAction | ClearErrorAction | LogOutAction