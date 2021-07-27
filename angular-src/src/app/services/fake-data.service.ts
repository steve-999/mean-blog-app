import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Blog } from '../models/blog';
import { User } from '../models/user';
import { UserService } from './user.service';

const blogUsingMarkdown = `
# Heading text 

Paragraph text

**bold text** 

*italicised text* 

<br>

## Ordered List

1. First item
2. Second item
3. Third item

<br>

## Unordered List	

- First item
- Second item
- Third item

<br>

## Code	

\`print('Hello world');\`

<br>

## Link	

[Google](https://www.google.co.uk)

<br>

## Image	

![alt text](/assets/angular_logo.png)
`;


const blogUsingHTML = `
<h3>H3 Heading</h3>

<p>Lorem ipsum text in a p tag. Et quod magni minus et qui et libero. Et voluptas deleniti enim quia. Numquam ducimus ut facilis quasi sit eum. Est rerum aperiam. Voluptatem ratione quam ea non itaque. </p>

<p>Blanditiis asperiores laboriosam cupiditate et ea. Accusamus nisi atque vero. Harum non esse distinctio est et beatae. Hic et nostrum autem consequatur qui.</p> 
<p>Fugiat fuga et beatae nobis impedit fuga soluta. Ut et fugiat. Rerum facere aut quos. Voluptas id deserunt.</p>

<h3>Unordered list</h3>

<ul>
<li>List item A</li>
<li>List item B</li>
<li>List item C</li>
</ul>

`;


@Injectable({
  providedIn: 'root'
})
export class FakeDataService {
  baseUrl = `${environment.API_BASE_URL}/api`; 
  Nposts_per_user = 5;

  fakeUsers: User[] = [
    {
      email: 'guest@gmail.com',
      password: 'guest',
      username: 'Guest'
    },    
    {
      email: 'admin@gmail.com',
      password: 'test12',
      username: 'Steve'
    },    
    {
      email: 'a@a.com',
      password: 'a',
      username: 'Alan'
    },
    {
      email: 'b@b.com',
      password: 'b',
      username: 'Brian'
    },
    {
      email: 'c@c.com',
      password: 'c',
      username: 'Charlie'
    },
    {
      email: 'd@d.com',
      password: 'd',
      username: 'Dave'
    },
    {
      email: 'e@e.com',
      password: 'e',
      username: 'Ed'
    },
  ]
  createdUsers: any[] = [];

  constructor(private http: HttpClient,
              private userService: UserService) {}

  createFakeUsers() {
    const url = `${this.baseUrl}/users`
    this.fakeUsers.forEach(user => {
      this.http.post(url, user)
        .subscribe(
          resp => {
            this.createdUsers.push(resp);
            console.log('FakeDataService > createFakeUsers > resp', resp);
          },
          err => console.log(err)
        )
    });
  }

  createFakeBlogs() {
    let url = `${this.baseUrl}/createFakeBlogsForUser`;
    this.userService.getUsers()
      .subscribe(
        users => {
          users.forEach(user => {
            this.http.post(url, {user: user, Nposts: this.Nposts_per_user})
              .subscribe(
                resp => console.log(resp),
                err => console.log(err)
              )
          });
          setTimeout(() => {
            const user = users.find(x => x.username === 'Guest');
            this.createBlogWithMarkdownHTML(user, blogUsingHTML, 'Blog using HTML');
            this.createBlogWithMarkdownHTML(user, blogUsingMarkdown, 'Blog using Markdown');
          }, 2000);
        },
        err => console.log(err)
      )
  } 

  createBlogWithMarkdownHTML(user, body, title) {
    console.log('createBlogWithMarkdownHTML > user', user);
    let url = `${this.baseUrl}/createFakeSingleBlog`;
    let blog = new Blog();
    blog = {
      userId: user._id,
      username: user.username,
      title: title, 
      body: body,
      createdAt: (new Date()).toISOString(),
      updatedAt: (new Date()).toISOString(),
    }
    this.http.post(url, blog)
      .subscribe(
        resp => console.log(resp),
        err => console.log(err)
      ) 
  }
}
