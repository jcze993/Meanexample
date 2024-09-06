import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = 'http://localhost:3241/api'
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
  signup(user) {
    return this.http.post<any>(this.URL + '/signup', user);
  }
  signin(user) {
    return this.http.post<any>(this.URL + '/signin', user)
  }
  loggedIn() {
    //con el getItem se obtiene el dato (token en este caso)
    //si esxiste un token devuelve un true si no un false
    //comprobacion super simple (solo ejemplo)
    return !!localStorage.getItem('token');
  }
  getToken() {
    return localStorage.getItem('token');
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/signin'])
  }
}
//}
