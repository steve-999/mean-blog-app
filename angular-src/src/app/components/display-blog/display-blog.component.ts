import { Component, OnInit, Input, OnChanges, ViewEncapsulation } from '@angular/core';
import { reverseHtmlChars } from '../../shared/shared_functions';
import { DatePipe } from '@angular/common';
import marked from 'marked';

@Component({
  selector: 'app-display-blog',
  templateUrl: './display-blog.component.html',
  styleUrls: ['./display-blog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DisplayBlogComponent implements OnInit, OnChanges {
  @Input() blog;
  @Input() parent: string;
  linkClass: string;

  constructor() {}
  ngOnInit(): void {
    if (this.blog) {
      this.processBlogData(this.blog);
    }
    this.linkClass = this.parent === 'home-component' ? 'linkEnabled' : 'linkDisabled'
  }

  ngOnChanges(): void {
    if (this.blog) {
      this.processBlogData(this.blog);
    }
  }

  processBlogData(blog) {
    blog.title = reverseHtmlChars(blog.title);
    blog.title = blog.title.replace('<script', '');
    blog.body = reverseHtmlChars(blog.body);
    blog.body = blog.body.replace('<script', '');
    blog.bodyHTML = marked(reverseHtmlChars(blog.body), {breaks: true, gfm: true, sanitize: false});
    this.blog = blog;
  }
}
