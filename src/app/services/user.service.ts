import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  register(user: User): Observable<User> {
    console.log(user);
    return this.httpClient.post<User>('http://localhost:9888/user', user);
  }


  login(username: string, password: string): Observable<User> {
    const params = {
      'username': username,
      'password': password
    };
    return this.httpClient.post<User>('http://localhost:9888/user/login', '', { params });
  }

}
