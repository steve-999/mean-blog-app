import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogs: Blog[] = [];
  users: User[] = [];
  showLoader = true;

  constructor(private blogService: BlogService,
              private userService: UserService) { }

  ngOnInit(): void {
    document.title = 'MEAN Blog App | Home';
    this.fetchBlogs()
  }

  fetchBlogs() {
    this.showLoader = true;
    this.blogService.getBlogs()
      .subscribe(
        resp => {
          this.showLoader = false;
          this.blogs = resp;
        },
        err => console.log('HomeComponent > fetchBlogs > err', err)
      );
  }
}
