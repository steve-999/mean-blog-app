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
    this.showLoader = true;
    this.fetchUsersAndBlogs();
  }

  fetchUsersAndBlogs() {
    this.userService.getUsernames()
    .subscribe(
      resp => {
        this.users = resp;
        const userIdMap = new Map();
        this.users.forEach(user => userIdMap.set(user._id, user.username));
        this.blogService.getBlogs()
          .subscribe(
            resp => {
              this.showLoader = false;
              resp.forEach(blog => {
                const username = userIdMap.get(blog.userId);
                const obj = {...blog, username};
                this.blogs.push(obj);
              })
            },
            err => console.log('HomeComponent > ngOnInit > getBlogs > err', err)
          );
      },
      err => console.log('HomeComponent > ngOnInit > getUsernames > err', err)
    );
  }
}
