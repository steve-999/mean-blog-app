import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { AuthService } from 'src/app/services/auth.service';
import { Blog } from '../../models/blog';
import { reverseHtmlChars, escapeHtmlChars } from '../../shared/shared_functions';

@Component({
  selector: 'app-edit-blog-form',
  templateUrl: './edit-blog-form.component.html',
  styleUrls: ['./edit-blog-form.component.css']
})
export class EditBlogFormComponent implements OnInit {
  pageType: string;
  pageHeading: string;
  submitButtonText: string;
  blog_id: string;
  userId: string;
  blog: Blog = {title: '', body: '', userId: ''};
  errorMessage = '';
  showLoader = false;

  constructor(
    private blogService: BlogService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

      if (this.router.url.startsWith('/edit')) {
        this.pageType = 'edit';
        this.pageHeading = 'Edit Your Blog';
        this.submitButtonText = 'Update';
        this.blog_id = this.activatedRoute.snapshot.params._id;
  
        this.showLoader = true;
        this.blogService.getBlog(this.blog_id)
          .subscribe(
            resp => {
              this.showLoader = false;
              if (resp.userId === this.userId) {
                this.blog = resp;
                this.blog.title = reverseHtmlChars(this.blog.title);
                this.blog.body = reverseHtmlChars(this.blog.body);
              }
              else {
                this.router.navigate(['/login'], {state: {message: 'You are not authorized to perform that operation'}});
              }
  
            },
            err => {
              this.showLoader = false;
              console.log('EditBlogFormComponent > ngOnInit > getBlog > err', err);
            }
          );  
      }
  }

  ngOnInit(): void {
    this.userId = this.authService.getLoggedInUserId();
    if (this.router.url === '/add') {
      this.pageType = 'add';
      this.pageHeading = 'New Blog';
      this.submitButtonText = 'Create';
      this.blog_id = undefined;
    } 
  }

  onSubmit() {
    if (!this.validateBlog(this.blog)) {
      return;
    }
    this.blog.title = escapeHtmlChars(this.blog.title);
    this.blog.body = escapeHtmlChars(this.blog.body);
    if (this.pageType === 'add') {
      this.onSubmitAddBlog(this.blog);
      document.title = 'MEAN Blog App | Create New Blog';
    }
    else if (this.pageType === 'edit') {
      this.onSubmitEditBlog(this.blog);
      document.title = 'MEAN Blog App | Edit Blog';
    }
  }

  onSubmitAddBlog(blog: Blog) {
    blog = {...blog, userId: this.userId};
    this.showLoader = true;
    this.blogService.addBlog(blog)
      .subscribe(
        resp => {
          this.showLoader = false;
          const redirectUrl = `/blogs/${resp._id}`;
          this.router.navigateByUrl(redirectUrl);
        },
        err => {
          this.showLoader = false;
          this.handleErrors(err);
        }
      );
  }

  onSubmitEditBlog(blog) {
    this.showLoader = true;
    this.blogService.updateBlog(this.blog_id, blog)
      .subscribe(
        resp => {
          this.showLoader = false;
          const redirectUrl = `/blogs/${this.blog_id}`;
          this.router.navigateByUrl(redirectUrl);
        },
        err => {
          this.showLoader = false;
          this.handleErrors(err);
        }
      );
  }

  handleErrors(err) {
    if (err instanceof HttpErrorResponse) {
      console.log('EditBlogFormComponent > handleErrors > err', err);
      if (err.status === 401) {
        this.router.navigate(['/login'], {state: {message: 'You are not authorized to perform that operation'}});
      }
    }
  }

  validateBlog(blog) {
    if (blog.title.length === 0) {
      this.errorMessage = 'A title is required';
      return false;
    }
    else if (blog.body.length === 0) {
      this.errorMessage = 'Please enter some text in the blog body';
      return false;
    }
    else {
      this.errorMessage = '';
      return true;
    }

  }
}
