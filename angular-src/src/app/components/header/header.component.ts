import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { MessageService } from '../../services/message.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  userIsAdmin: Observable<boolean>;
  userId: string = '';
  username: string = '';
  userIsLoggedIn: boolean = false;
  message: any = {};
  message_subscription: Subscription;


  constructor(public authService: AuthService,
              private router: Router,
              private messageService: MessageService,
              private userService: UserService) {

    this.message_subscription = this.messageService.getMessage()
                                  .subscribe(
                                    message => {
                                      this.updateNavLinks(message);
                                    }
                                  );
  }

  ngOnInit(): void {
    this.updateNavLinks('refresh');
  }

  ngOnDestroy(): void {
    this.message_subscription.unsubscribe();
  }

  updateNavLinks(message) {
    this.message = {text: 'abcdefg'};
    this.userIsLoggedIn = this.authService.loggedIn();
    this.userId = this.authService.getLoggedInUserId();
    if (this.userId) {
      this.userService.getUsername(this.userId)
        .subscribe(
          resp => this.username = resp.username,
          err => {
            this.username = '';
            console.log('updateNavLinks > getUsername > err', err);
          }
        )
    }
    else {
      this.username = '';
    }
    this.authService.loggedInUserIsAdmin()
        .subscribe({
          next: val => {
            this.userIsAdmin = val;
          },
          error: err => console.log('updateNavLinks > loggedInUserIsAdmin > err', err)
        });
    this.message = message;
  }

  onClickLink(url) {
    if (this.router.url === '/login') {
      this.router.navigateByUrl('/blogs', {skipLocationChange: true})
          .then(() => this.router.navigate(['/login'], {state: {message: 'You are not authorized to perform that operation'}}));
    }
    else {
      this.router.navigate([url]);
    }
  }

  logoutUser() {
    this.authService.logoutUser();
    this.updateNavLinks('user has logged out');
    this.router.navigate(['/login']);
  }
}
