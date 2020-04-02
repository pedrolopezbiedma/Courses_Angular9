import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('El token es:');
        console.log(this.authService.token);

        if(!this.authService.token){
            return next.handle(req);
        }

        let editedRequest = req.clone({ 
            params: new HttpParams().set('auth', this.authService.token)
        });

        return next.handle(editedRequest);
    }
}