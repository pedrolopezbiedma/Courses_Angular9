import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class LoggingService {
    isLogged = false;

    constructor() { }
    
    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.isLogged);
                }, 800)
            }
        );
        return promise;
    }

    login(){
        this.isLogged = true;
    }

    logout(){
        this.isLogged = false;
    }
}