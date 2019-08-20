import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }



getUser(id: number): Observable<User[]>{
  return this.http.get<User[]>(this.baseUrl + 'users/' + id);
}


getUsers(): Observable<User[]>{
  return this.http.get<User[]>(this.baseUrl + 'users');
}

DeleteUser(id: number) {
  return this.http.delete(this.baseUrl + 'users/' + id);
}

UpdateUser(id: number, user: User) {
  return this.http.put(this.baseUrl + 'users/' + id , user);
}

}
