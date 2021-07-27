import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {
  _id: string;
  blog: Blog;
  userIsOwner: boolean = false;
  showLoader = false;

  constructor(
      private blogService: BlogService, 
      private activatedRoute: ActivatedRoute,
      private authService: AuthService,
      private userService: UserService,
      private router: Router) { 
    this._id = this.activatedRoute.snapshot.params._id;
  }

  ngOnInit(): void {
    this.showLoader = true;
    this.blogService.getBlog(this._id)
      .subscribe(
        resp => {
          this.showLoader = false;
          this.blog = resp;
          const userId = this.authService.getLoggedInUserId();
          this.userIsOwner = this.blog.userId === userId;
          document.title = `MEAN Blog App | ${this.blog.title}`;
          this.userService.getUser(this.blog.userId)
            .subscribe(
              resp => this.blog.username = resp.username,
              err => console.log(err)
            )
        },
        err => {
          this.showLoader = false;
          console.log(err);
        }
      );
  }
  
  onEditClick(): void {
    this.router.navigate([`/edit/${this._id}`], {state: {data: this.blog}});
  }

  onDeleteClick(): void {
    const _id = this.blog._id;
    this.showLoader = true;
    this.blogService.deleteBlog(_id).subscribe(
      resp => {
        this.showLoader = false;
        this.router.navigateByUrl('/dashboard');
      },
      err => {
        this.showLoader = false;
        if (err instanceof HttpErrorResponse && err.status === 401) {
          console.log('BlogItemComponent > onDeleteClick > err', err);
          this.router.navigate(['/login'], {state: {message: 'You are not authorized to perform that operation'}});
        }
        else {
          console.log(err);
        }
      }
    );
  }
}
