import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { User } from '../models/user';
import { UserService } from './user.service';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { CookieService } from 'ngx-cookie-service';


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
              private messageService: MessageService,
              private cookieService: CookieService) { }

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

  logoutUser() {
    this.cookieService.delete('username');
    this.cookieService.delete('userId');
    this.cookieService.delete('token');
    this.messageService.sendMessage('user has logged out');
    this.router.navigate(['/login']);
  }

  isloggedIn() {
    return this.cookieService.check('userId');  
  }

  getLoggedInUserId() {
    return this.cookieService.get('userId');
  }

  getLoggedInUsername() {
    return this.cookieService.get('username');
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
