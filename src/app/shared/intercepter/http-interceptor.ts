import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthorInterCeptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authRq = req.clone({
      headers: req.headers.set('Authorization', 'nhdieu')
    });
    return next.handle(authRq);
  }

}
