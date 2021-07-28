import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = `${environment.API_BASE_URL}/api`;  
  user: User;
  users: User[] = [];

  constructor(private http: HttpClient) { }

  getUser(id): Observable<User> {
    const url = `${this.baseUrl}/users/${id}`;
    return this.http.get<User>(url);
  }

  getUsernames(): Observable<any[]> {
    const url = `${this.baseUrl}/usernames`;
    return this.http.get<any[]>(url);
  }

  getUsername(id): Observable<any> {
    const url = `${this.baseUrl}/usernames/${id}`;
    return this.http.get<any>(url);
  }

  updateUsername(userId, username): Observable<User> {
    const url = `${this.baseUrl}/usernames/${userId}`;
    return this.http.patch<User>(url, {username});
  }

  setUsers(users: User[]): void {
    this.users = users;
  }

  deleteAllUsers() {
    const url = `${this.baseUrl}/users`;
    return this.http.delete<User[]>(url);
  }

}
