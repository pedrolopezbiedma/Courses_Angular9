import { Action } from '@ngrx/store';

export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

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