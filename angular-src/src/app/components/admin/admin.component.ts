import { Component, OnInit } from '@angular/core';
import { FakeDataService } from '../..//services/fake-data.service';
import { BlogService } from '../../services/blog.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    public blogService: BlogService,
    private fakeDataService: FakeDataService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    document.title = 'MEAN Blog App | Admin';
  }

  deleteAllBlogs() {
    this.blogService.deleteAllBlogs().subscribe(blogs => {
      console.log('deleteAllBlogs > blogs', blogs);
    });
  }

  deleteAllUsers() {
    this.userService.deleteAllUsers().subscribe(users => {
      console.log('deleteAllUsers > users', users);
    });
  }

  createFakeUsers() {
    this.fakeDataService.createFakeUsers();
  }

  createFakeBlogs() {
    console.log('AdminComponent > createFakeBlogs()');
    this.fakeDataService.createFakeBlogs();
  }
}
