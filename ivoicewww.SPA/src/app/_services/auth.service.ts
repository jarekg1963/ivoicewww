import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
baseUrl = environment.apiUrl + 'auth/';
jwtHelper = new JwtHelperService();
decodeToken: any;

decodedToken: any;


constructor(private http: HttpClient) { }

login(model: any){
 return this.http.post(this.baseUrl + 'login', model)
    .pipe(map((response: any) => {
      const user = response;
      if (user) {
        localStorage.setItem('token', user.token);
        return this.decodedToken = this.jwtHelper.decodeToken(user.token);
      }
    })
    );
}

registeracja(model: any) {
  return this.http.post('http://localhost:5000/api/auth/register', model);
}

logedIn() {
  const token = localStorage.getItem('token');
  return !this.jwtHelper.isTokenExpired(token);
}

}