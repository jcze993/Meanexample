import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(
    private authservice: AuthService
  ) { }
  intercept(req, next) {
    const tokenizereq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authservice.getToken()}`
      }
    })
    return next.handle(tokenizereq); //se añade una cabezera en cada peticion
  }
}
