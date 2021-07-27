import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { User } from '../models/user';
import { UserService } from './user.service';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = `${environment.API_BASE_URL}/api`;
  cookieValue: string = '';

  constructor(private http: HttpClient,
              private router: Router,
              private userService: UserService,
              private messageService: MessageService) { }

  signupUser(userData) {
    const user: User = userData;
    const url = `${this.baseUrl}/signup`;
    return this.http.post<any>(url, user, httpOptions);
  }

  loginUser(userData) {
    const user: User = userData;
    const url = `${this.baseUrl}/login`;
    return this.http.post<any>(url, user, httpOptions);
  }

  saveUserData(data) {
    localStorage.setItem('userId', data.userId);
    this.messageService.sendMessage('user has logged in');
  }

  logoutUser() {
    localStorage.removeItem('userId');
    this.messageService.sendMessage('user has logged out');
    this.router.navigate(['/login']);
  }

  loggedIn() {
    return localStorage.getItem('userId') ? true : false;  
  }

  getLoggedInUserId() {
    return localStorage.getItem('userId');
  }

  loggedInUserIsAdmin(): Observable<any> {
    const loggedInUserId = this.getLoggedInUserId();
    if (!loggedInUserId) { 
      return of(false);
    }
    return this.userService.getUser(loggedInUserId)
            .pipe(
              map(resp => {
                return resp.email === environment.ADMIN_USER_EMAIL;
              }),
              catchError(() => of(false))
            );
  }
}
