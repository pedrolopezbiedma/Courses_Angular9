import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';

import { LoggingService } from './logging.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private loggingService: LoggingService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.loggingService.isAuthenticated()
            .then(isLogged => {
                if(isLogged){
                    return true;
                }
                else{
                    this.router.navigate(['']);
                }
            });
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        return this.canActivate(route, state);
    }
}