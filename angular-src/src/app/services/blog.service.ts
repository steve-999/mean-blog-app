import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Blog } from '../models/blog';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  baseUrl = `${environment.API_BASE_URL}/api`; 
  blog: Blog;
  blogs: Blog[] = [];

  constructor(private http: HttpClient) {}

  getBlogs(): Observable<Blog[]> {
    const url = `${this.baseUrl}/blogs`;
    console.log('BlogService > getBlogs() > url', url);
    return this.http.get<Blog[]>(url);
  }

  getBlogsForUserId(userId): Observable<Blog[]> {
    const url = `${this.baseUrl}/blogs4userId/${userId}`;
    return this.http.get<Blog[]>(url);
  }

  getUserIdForBlog(blog_id): Observable<string> {
    const url = `${this.baseUrl}/useridForBlog/${blog_id}`;
    return this.http.get<string>(url);
  }

  getBlog(_id): Observable<Blog> {
    const url = `${this.baseUrl}/blogs/${_id}`;
    return this.http.get<Blog>(url);
  }

  addBlog(blog) {
    const url = `${this.baseUrl}/blogs`;
    return this.http.post<Blog>(url, blog, httpOptions);
  }

  updateBlog(_id, blog): Observable<Blog> {
    const url = `${this.baseUrl}/blogs/${_id}`;
    return this.http.put<Blog>(url, blog, httpOptions);
  }

  deleteBlog(_id): Observable<Blog> {
    const url = `${this.baseUrl}/blogs/${_id}`;
    return this.http.delete<Blog>(url);
  }

  deleteAllBlogs() {
    const url = `${this.baseUrl}/blogs`;
    return this.http.delete<Blog[]>(url);
  }

  seedDbBlogs(Nposts) {
    const url = `${this.baseUrl}/seed_db_posts`;
    return this.http.post(url, { Nposts: Nposts }, httpOptions);
  }
}

