import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { BlogService } from '../services/blog.service';

@Injectable({
  providedIn: 'root'
})
export class EditGuard implements CanActivate {

  constructor(private authService: AuthService,
              private blogService: BlogService,
              private router: Router) {}


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

    const loggedInUserId = this.authService.getLoggedInUserId();
    const targetUrl = state.url;
    const urlArray = targetUrl.split('/'); 
    if (urlArray.length !== 3 || urlArray[1] !== 'edit') {
      return false;
    }
    const blog_id = urlArray[2]; 
    return this.blogService.getUserIdForBlog(blog_id)
              .pipe(
                map(blog_userId => {
                  if (blog_userId === loggedInUserId) {
                    return true;
                  }
                  else {
                    this.router.navigate(['/login'], {state: {message: 'You are not authorized to perform that operation'}});
                    return false;                       
                  }
                }),
                catchError(err => {
                  console.log('AccessGuard > canActivate > catchError', err);
                  this.router.navigate(['/login'], {state: {message: 'You are not authorized to perform that operation'}});
                  return of(false);  
                })
              );
  }
}
