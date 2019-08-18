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

// getUsers() {
//  return this.http.get('http://localhost:5000/api/users');
// }


getUsers(): Observable<User[]>{
  return this.http.get<User[]>(this.baseUrl + 'users');
}

DeleteUser(id: number) {
  return this.http.delete(this.baseUrl + 'users/' + id);
}


}
