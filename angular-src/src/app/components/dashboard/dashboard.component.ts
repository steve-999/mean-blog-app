import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { BlogService } from 'src/app/services/blog.service';
import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userId: string = '';
  blogs: Blog[];
  user: User;
  username: string = '';
  message: string = '';
  messageColor: string = 'seagreen';
  submitButtonEnabled: boolean = true;
  showLoader = false;

  constructor(private authService: AuthService,
              private blogService: BlogService,
              private userService: UserService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.userId = this.authService.getLoggedInUserId();
    document.title = 'MEAN Blog App | Dashboard';
    
    this.showLoader = true;
    this.blogService.getBlogsForUserId(this.userId)
        .subscribe(
          resp => {
            this.showLoader = false;
            this.blogs = resp;
          },
          err => {
            this.showLoader = false;
            console.log(err);
          }
        )

    this.userService.getUsername(this.userId)
          .subscribe(
            resp => {
              this.username = resp.username;
            },
            err => console.log(err)
          )
  }

  onUpdateUsername() {
    if (!this.validateUsername(this.username)) {
      this.displayMessage('Invalid username', false);   
      return; 
    }
    this.showLoader = true;
    this.userService.updateUsername(this.userId, this.username)
      .subscribe(
        resp => {
          this.showLoader = false;
          this.displayMessage(`Username updated to ${resp}`, true);
          this.messageService.sendMessage('username has changed');
        },
        err => {
          this.showLoader = false;
          console.log(err);
        }
      )
  }

  handleInputChange(e) {
    this.username = e;
    this.validateUsername(this.username);
  }

  validateUsername(username) {
    if (username.length === 0) {
      this.displayMessage('Username is required', true);
      return false;
    }
    else if (username.length > 50) {
      this.displayMessage('Username cannot be over 50 characters', false);
      return false;
    }
    else if (!username.match(/^[A-Za-z0-9_ ]+$/)) {
      this.displayMessage('Username can only consist of letters, numbers, spaces and underscores', false);
      return false;
    }
    else {
      this.displayMessage('', true);
      return true;
    }
  }

  displayMessage(message: string, isValidUsername: boolean) {
    this.message = message;
    this.messageColor = isValidUsername ? 'seagreen' : 'crimson';
  }
}
