import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let editedReq = req.clone({ url: 'new-url', headers: req.headers.append('Auth', 'xyz')});
        console.log(req);
        return next.handle(editedReq);
    }
}