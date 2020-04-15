import { Action } from '@ngrx/store';

export const LOGIN_START = 'LOGIN_START';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

export class StartLogInAction implements Action {
    readonly type = LOGIN_START;

    constructor(public email: string, public password: string ){}
}

export class LogInAction implements Action {
    readonly type = LOG_IN;
    constructor( 
        public user: { email: string, id: string, token: string, expDate: Date } 
    ){}

}

export class LogOutAction implements Action {
    readonly type = LOG_OUT;
    constructor(){}

}

export type AuthActions = LogInAction | LogOutAction