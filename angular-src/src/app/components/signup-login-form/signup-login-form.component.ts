import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MessageService } from 'src/app/services/message.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signup-login-form',
  templateUrl: './signup-login-form.component.html',
  styleUrls: ['./signup-login-form.component.css']
})
export class SignupLoginFormComponent implements OnInit {
  email: string = '';
  password: string = '';
  emailError: string = '';
  passwordError: string = '';
  message: string = '';
  signup_login_type: string = '';
  showLoader = false;

  constructor(private authService: AuthService,
              private router: Router,
              private messageService: MessageService) { }

  ngOnInit(): void {
    if (this.router.url === '/login') {
      this.signup_login_type = 'Log in';
      document.title = 'MEAN Blog App | Log in';
    }
    else if (this.router.url === '/signup') {
      this.signup_login_type = 'Sign up';
      document.title = 'MEAN Blog App | Sign up'
    }

    if (history.state.message) {
      this.message = history.state.message;
    }
  }

  ///////////////////////////////////////////////////////////////////////////

  onSubmit() {
    if (!this.preSubmitValidation()) {
      return;
    }

    if (this.signup_login_type === 'Sign up') {
      this.showLoader = true;
      this.authService.signupUser({email: this.email, password: this.password})
        .subscribe(
          resp => {
            this.showLoader = false;
            this.handleResponse(resp)
          },
          err => {
            this.showLoader = false;
            this.handleErrors(err);
          }
        );
    }
    else if (this.signup_login_type === 'Log in') {
      this.showLoader = true;
      this.authService.loginUser({email: this.email, password: this.password})
        .subscribe(
          resp => {
            this.showLoader = false;
            this.handleResponse(resp)
          },
          err => {
            this.showLoader = false;
            this.handleErrors(err);
          }
        );
    }
  }

  handleResponse(resp) {
    this.authService.saveUserData(resp);
    this.router.navigate(['/dashboard']);
    this.messageService.sendMessage('message: user successfully logged in or signed up');
  }

  handleErrors(err) {
    console.log('SignupLoginFormComponent > onSubmit > err', err);
    const errorMessage: string = err.error;
    this.emailError = '';
    this.passwordError = '';
    if (errorMessage.includes('email')) {
      this.emailError = err.error;
    }
    if (errorMessage.includes('password')) {
      this.passwordError = err.error;
    } 
    this.messageService.sendMessage('message: errors occurred after trying to log in or sign up');
  }

  //////////////////////////////////////////////////////////////////////////////

  handleBlur(type, event) {
    const val = event.target.value;
    this.validateUserData(type, val);
  }

  validateUserData(type: string, val: string) {
    if (type === 'Email') {
      this.validateEmail(val);
    }
    else if (type === 'Password') {
      this.validatePassword(val);
    }
  }

  validateEmail(val) {
    this.email = val;
    if (val.length === 0) {
      this.emailError = 'Email is required';    
    }
    else if (!val.match(/^[A-Za-z0-9_\-@.]+$/)) {
      this.emailError = 'Email can only consist of letters, numbers or ., -, _, @';
    }
    else {
      this.emailError = '';
      this.passwordError = '';
    }
  }

  validatePassword(val) {
    this.password = val;
    if (val.length === 0) {
      this.passwordError = 'Password is required';
    }
    else if (val.length > 100) {
      this.passwordError = 'Password cannot be over 100 characters';
    }
    else {
      this.emailError = '';
      this.passwordError = '';
    }
  }

  preSubmitValidation() {
    this.emailError = '';
    this.passwordError = '';
    if (!this.email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/)) {
      this.emailError = 'Please enter a valid email address';
      return false;
    }
    else if (this.password.length === 0) {
      this.passwordError = 'Please enter a password';
      return false;
    }
    else if (this.password.length < environment.MIN_PASSWORD_LENGTH) {
      this.passwordError = `Passwords must be at least ${environment.MIN_PASSWORD_LENGTH} characters`;
      return false;
    }
    else {
      return true;
    }
  }
}
