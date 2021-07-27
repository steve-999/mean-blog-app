import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  loggedInUser: User;

  constructor(private authService: AuthService,
              private userService: UserService,
              private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree { 
      
    return this.authService.loggedInUserIsAdmin()
      .pipe(
        map(resp => {
          if (resp === true) {
            return true;
          }
          else {
            this.router.navigate(['/login'], {state: {message: 'You are not authorized to perform that operation'}});
            return false;
          }
        })
      );
  }

}
