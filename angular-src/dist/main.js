(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+3/u":
/*!*************************************************************!*\
  !*** ./src/app/components/blog-item/blog-item.component.ts ***!
  \*************************************************************/
/*! exports provided: BlogItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogItemComponent", function() { return BlogItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/blog.service */ "a+Xp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _display_blog_display_blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../display-blog/display-blog.component */ "ppPG");





class BlogItemComponent {
    constructor(blogService, activatedRoute, router) {
        this.blogService = blogService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this._id = this.activatedRoute.snapshot.params._id;
        console.log('BlogItem > constructor > this._id: ', this._id);
    }
    ngOnInit() {
        this.blogService.getBlog(this._id).subscribe(blog => {
            this.blog = blog;
            console.log(this.blog);
        });
    }
    onEditClick() {
        this.router.navigate([`/edit/${this._id}`], { state: { data: this.blog } });
    }
    onDeleteClick() {
        console.log('delete clicked');
        const _id = this.blog._id;
        this.blogService.deleteBlogViaAPI(_id).subscribe(resp => {
            console.log('BlogItemComponent > onDeleteClick > resp: ', resp);
            this.blogService.deleteBlogFromClassArray(_id);
        });
        this.router.navigateByUrl('/');
    }
}
BlogItemComponent.ɵfac = function BlogItemComponent_Factory(t) { return new (t || BlogItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
BlogItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogItemComponent, selectors: [["app-blog-item"]], decls: 7, vars: 1, consts: [[1, "component-container"], [3, "blog"], [1, "edit-button", 3, "click"], [1, "delete-button", 3, "click"]], template: function BlogItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-display-blog", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogItemComponent_Template_button_click_3_listener() { return ctx.onEditClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogItemComponent_Template_button_click_5_listener() { return ctx.onDeleteClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blog", ctx.blog);
    } }, directives: [_display_blog_display_blog_component__WEBPACK_IMPORTED_MODULE_3__["DisplayBlogComponent"]], styles: [".edit-icon[_ngcontent-%COMP%] {\r\n    height: 60px;\r\n}\r\n\r\n.edit-button[_ngcontent-%COMP%], .delete-button[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-size: 14px;\r\n    border-radius: 6px;\r\n    margin: 0 10px;\r\n    padding: 3px 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.edit-button[_ngcontent-%COMP%] {\r\n    background-color: SeaGreen ;\r\n    border-color: SeaGreen ;\r\n}\r\n\r\n.delete-button[_ngcontent-%COMP%] {\r\n    background-color: indianred;  \r\n    border-color: indianred;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ibG9nLWl0ZW0vYmxvZy1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ibG9nLWl0ZW0vYmxvZy1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmVkaXQtaWNvbiB7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbi5lZGl0LWJ1dHRvbiwgLmRlbGV0ZS1idXR0b24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmVkaXQtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IFNlYUdyZWVuIDtcclxuICAgIGJvcmRlci1jb2xvcjogU2VhR3JlZW4gO1xyXG59XHJcblxyXG4uZGVsZXRlLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpYW5yZWQ7ICBcclxuICAgIGJvcmRlci1jb2xvcjogaW5kaWFucmVkO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog-item',
                templateUrl: './blog-item.component.html',
                styleUrls: ['./blog-item.component.css']
            }]
    }], function () { return [{ type: _services_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "+DhY":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/blog.service */ "a+Xp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _id = '5ff96fcc7969885dc449bc7d';
class AboutComponent {
    constructor(blogService, router) {
        this.blogService = blogService;
        this.router = router;
        this.numBlogs = 0;
    }
    ngOnInit() {
        this._id = _id;
        this.numBlogs = this.blogService.getNumBlogs();
    }
    blogButtonClick() {
        console.log('blog button clicked');
        //this.blog = this.blogService.getBlog(this._id);
        this.blogService.getBlog(this._id).subscribe(blog => {
            this.blog = blog;
            console.log('AboutComponent > blogButtonClick > this.blog: ', this.blog);
        });
    }
    blogsButtonClick() {
        console.log('blogs button clicked');
        this.blogService.getBlogs()
            .subscribe(blogs => {
            console.log('AboutComponent > blogsButtonClick > blogs: ', blogs);
        });
    }
    addBlogClick() {
        console.log('add blog button clicked');
        const blog = {
            userId: 11,
            id: 50,
            title: 'test blog title',
            body: (new Date).toISOString()
        };
        this.blogService.addBlogViaAPI(blog)
            .subscribe(blog => {
            console.log('AboutComponent > addBlogClick > blog: ', blog);
            //this.blogService.addBlogToClassArray(blog);
            this.router.navigate(['/']);
        });
    }
    updateBlogClick() {
    }
    deleteBlogClick() {
    }
    seedDbBlogsClick() {
        const Nblogs = 12;
        this.blogService.seedDbBlogs(Nblogs)
            .subscribe(blogs => {
            console.log('AboutComponent > seedDbBlogsClick > blogs: ', blogs);
            this.router.navigate(['/']);
        });
    }
    deleteAllBlogsClick() {
        console.log('called AboutComponent > deleteAllBlogsClick()');
        this.blogService.deleteAllBlogsViaAPI().subscribe(blogs => {
            console.log('deleteAllBlogsClick > blogs', blogs);
            //this.blogService.deleteAllBlogsFromClassArray();
            this.numBlogs = blogs.length;
            this.router.navigate(['/']);
        });
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 16, vars: 1, consts: [["type", "button", 3, "click"], ["type", "button", 1, "seed-button", 3, "click"], ["type", "button", 1, "delete-button", 3, "click"], ["id", "output"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_button_click_0_listener() { return ctx.blogButtonClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "get blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_button_click_2_listener() { return ctx.blogsButtonClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "get blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_button_click_4_listener() { return ctx.addBlogClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "add blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_button_click_6_listener() { return ctx.updateBlogClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "update blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_button_click_8_listener() { return ctx.deleteBlogClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "delete blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_button_click_10_listener() { return ctx.seedDbBlogsClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "seed database");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_button_click_12_listener() { return ctx.deleteAllBlogsClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "delete all blogs from db");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.numBlogs);
    } }, styles: ["button[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: 15px;\r\n    padding: 4px 10px;\r\n    background-color: #0275d8;\r\n    color: white;\r\n    border: 1px solid #0275d8;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n.seed-button[_ngcontent-%COMP%] {\r\n    background-color: #5cb85c;\r\n    border: 1px solid #5cb85c;    \r\n}\r\n\r\n.delete-button[_ngcontent-%COMP%] {\r\n    background-color: #d9534f;\r\n    border: 1px solid #d9534f;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgcGFkZGluZzogNHB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI3NWQ4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAyNzVkODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNlZWQtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1Y2I4NWM7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNWNiODVjOyAgICBcclxufVxyXG5cclxuLmRlbGV0ZS1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NTM0ZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOTUzNGY7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return [{ type: _services_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\www\coursera\Angular\mean-blog-app\angular-src\src\main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 15, vars: 0, consts: [[1, "logo"], ["routerLink", "/"], ["routerLink", "/add"], ["routerLink", "/about"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "MEAN Blog App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["*[_ngcontent-%COMP%] {\r\n    background-color: seagreen; \r\n}\r\n\r\nheader[_ngcontent-%COMP%] {\r\n    height: 90px;\r\n    color: white;\r\n    margin-bottom: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    \r\n    box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\nh1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    font-family: Raleway, sans-serif;\r\n    font-size: 24px;\r\n    font-weight: 600;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] { \r\n    margin-top: 15px;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: yellow;\r\n    text-decoration: none;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n    color: white;\r\n    text-decoration: underline;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    align-self: flex-start;\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n    float: left;\r\n    margin: 10px;\r\n}\r\n\r\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksMEJBQTBCLEVBQUUsa0NBQWtDO0FBQ2xFOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLDhEQUE4RDtJQUM5RCxnREFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbioge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2VhZ3JlZW47IC8qIHNlYWdyZWVuICByb3lhbGJsdWUgb2xpdmVkcmFiICovXHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLyogb2Zmc2V0LXggfCBvZmZzZXQteSB8IGJsdXItcmFkaXVzIHwgc3ByZWFkLXJhZGl1cyB8IGNvbG9yICovXHJcbiAgICBib3gtc2hhZG93OiAwcHggNnB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuXHJcbmgxIGEge1xyXG4gICAgZm9udC1mYW1pbHk6IFJhbGV3YXksIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ubG9nbyB7IFxyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuYSB7XHJcbiAgICBjb2xvcjogeWVsbG93O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxufVxyXG5cclxubGkge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbmxpIGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    //API_BASE_URL: 'http://localhost:3000',
    //API_BASE_URL: 'https://mean-blog-app1.herokuapp.com',
    API_BASE_URL: 'https://mean-blog-app-cu3cy.ondigitalocean.app',
    PORT: 5000
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/blog.service */ "a+Xp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _display_blog_display_blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../display-blog/display-blog.component */ "ppPG");





function HomeComponent_app_display_blog_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-display-blog", 1);
} if (rf & 2) {
    const blog_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blog", blog_r1);
} }
class HomeComponent {
    constructor(blogService) {
        this.blogService = blogService;
        this.blogs = [];
    }
    ngOnInit() {
        this.blogService.getBlogs().subscribe(blogs => {
            this.blogs = blogs;
            console.log('HomeComponent > ngOnInit > this.blogs: ', this.blogs);
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 3, vars: 2, consts: [[3, "blog", 4, "ngFor", "ngForOf"], [3, "blog"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_app_display_blog_2_Template, 1, 1, "app-display-blog", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.blogs.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.blogs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _display_blog_display_blog_component__WEBPACK_IMPORTED_MODULE_3__["DisplayBlogComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _services_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"] }]; }, null); })();


/***/ }),

/***/ "JzmT":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 3, vars: 0, consts: [[1, "page-not-found-container"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Error: Page not found.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".page-not-found-container[_ngcontent-%COMP%] {\r\n    height: 150px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    margin-top: 60px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    font-size: 26px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ucGFnZS1ub3QtZm91bmQtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/blog.service */ "a+Xp");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/user.service */ "qfBg");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AppComponent {
    constructor(blogService, userService) {
        this.blogService = blogService;
        this.userService = userService;
        this.title = 'angular-src';
    }
    ngOnInit() {
        this.blogService.getBlogs().subscribe(blogs => {
            this.blogs = blogs;
            //this.blogService.setBlogs(blogs);
            console.log('AppComponent > ngOnInit > this.blogs: ', this.blogs);
        });
        this.userService.getUsers().subscribe(users => {
            this.users = users;
            //this.userService.setUsers(users);
            console.log('AppComponent > ngOnInit > this.users: ', this.users);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "component-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _services_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }]; }, null); })();


/***/ }),

/***/ "UzNh":
/*!***********************************************************!*\
  !*** ./src/app/components/add-blog/add-blog.component.ts ***!
  \***********************************************************/
/*! exports provided: AddBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBlogComponent", function() { return AddBlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/blog.service */ "a+Xp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_blog_form_edit_blog_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../edit-blog-form/edit-blog-form.component */ "c1X2");





class AddBlogComponent {
    constructor(blogService, router) {
        this.blogService = blogService;
        this.router = router;
        this.fillWithFakerData = true;
    }
    ngOnInit() {
    }
    onSubmitAddBlog(value) {
        console.log('AddBlogComponent > onSubmitAddBlog > value: ', value);
        const obj = {
            userId: 1,
            id: this.blogService.getNumBlogs() + 1
        };
        const blog = Object.assign(value, obj);
        this.blogService.addBlogViaAPI(value)
            .subscribe(resp => {
            console.log('AddBlogComponent > onSubmitAddBlog > resp: ', resp);
            this.blogService.addBlogToClassArray(value);
            const redirectUrl = `/blogs/${resp._id}`;
            this.router.navigateByUrl(redirectUrl);
        });
    }
}
AddBlogComponent.ɵfac = function AddBlogComponent_Factory(t) { return new (t || AddBlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AddBlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddBlogComponent, selectors: [["app-add-blog"]], decls: 3, vars: 0, consts: [["buttonText", "Create", 3, "submitEvent"]], template: function AddBlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create New Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-edit-blog-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submitEvent", function AddBlogComponent_Template_app_edit_blog_form_submitEvent_2_listener($event) { return ctx.onSubmitAddBlog($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_edit_blog_form_edit_blog_form_component__WEBPACK_IMPORTED_MODULE_3__["EditBlogFormComponent"]], styles: ["h2[_ngcontent-%COMP%] {\r\n    font-family: 'Raleway', sans-serif;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    font-size: 24px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtYmxvZy9hZGQtYmxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGtDQUFrQztJQUNsQyxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkZC1ibG9nL2FkZC1ibG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaDIge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddBlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-blog',
                templateUrl: './add-blog.component.html',
                styleUrls: ['./add-blog.component.css']
            }]
    }], function () { return [{ type: _services_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_blog_item_blog_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/blog-item/blog-item.component */ "+3/u");
/* harmony import */ var _components_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/edit-blog/edit-blog.component */ "dYM4");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/about/about.component */ "+DhY");
/* harmony import */ var _components_display_blog_display_blog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/display-blog/display-blog.component */ "ppPG");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "JzmT");
/* harmony import */ var _components_add_blog_add_blog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/add-blog/add-blog.component */ "UzNh");
/* harmony import */ var _components_edit_blog_form_edit_blog_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/edit-blog-form/edit-blog-form.component */ "c1X2");


















//import { BlogService } from './services/blog.service';
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot({})
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _components_blog_item_blog_item_component__WEBPACK_IMPORTED_MODULE_8__["BlogItemComponent"],
        _components_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_9__["EditBlogComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
        _components_about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
        _components_display_blog_display_blog_component__WEBPACK_IMPORTED_MODULE_12__["DisplayBlogComponent"],
        _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__["PageNotFoundComponent"],
        _components_add_blog_add_blog_component__WEBPACK_IMPORTED_MODULE_14__["AddBlogComponent"],
        _components_edit_blog_form_edit_blog_form_component__WEBPACK_IMPORTED_MODULE_15__["EditBlogFormComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreRootModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _components_blog_item_blog_item_component__WEBPACK_IMPORTED_MODULE_8__["BlogItemComponent"],
                    _components_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_9__["EditBlogComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                    _components_about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
                    _components_display_blog_display_blog_component__WEBPACK_IMPORTED_MODULE_12__["DisplayBlogComponent"],
                    _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__["PageNotFoundComponent"],
                    _components_add_blog_add_blog_component__WEBPACK_IMPORTED_MODULE_14__["AddBlogComponent"],
                    _components_edit_blog_form_edit_blog_form_component__WEBPACK_IMPORTED_MODULE_15__["EditBlogFormComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot({})
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "a+Xp":
/*!******************************************!*\
  !*** ./src/app/services/blog.service.ts ***!
  \******************************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");






const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
class BlogService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_BASE_URL}/api`;
        this.blogs = [];
    }
    /////////////////////////////////////////////////////////////////////////////////////////////
    getBlogs() {
        return this.getBlogsFromAPI();
    }
    getBlogsFromAPI() {
        const url = `${this.baseUrl}/blogs`;
        console.log('BlogService > getBlogsFromAPI > url', url);
        return this.http.get(url);
    }
    /////////////////////////////////////////////////////////////////////////////////////////////
    getBlog(_id) {
        const blog = this.blogs.find(blog => blog._id == _id);
        console.log('in BlogService > getBlog > returning: this.getBlogFromAPI(_id)');
        return this.getBlogFromAPI(_id);
    }
    getBlogFromAPI(_id) {
        const url = `${this.baseUrl}/blogs/${_id}`;
        console.log('BlogService > getBlogFromAPI > _id: ', _id);
        console.log('BlogService > getBlogFromAPI > url', url);
        return this.http.get(url);
    }
    /////////////////////////////////////////////////////////////////////////////////////////////
    addBlogViaAPI(blog) {
        const url = `${this.baseUrl}/blogs`;
        console.log('BlogService > addBlogViaAPI > url: ', url);
        return this.http.post(url, blog, httpOptions);
    }
    /////////////////////////////////////////////////////////////////////////////////////////////
    updateBlogViaAPI(_id, blog) {
        const url = `${this.baseUrl}/blogs/${_id}`;
        console.log('BlogService > updateBlogViaAPI > url: ', url);
        return this.http.put(url, blog, httpOptions);
    }
    deleteBlogViaAPI(_id) {
        const url = `${this.baseUrl}/blogs/${_id}`;
        console.log('BlogService > deleteBlogViaAPI > url: ', url);
        return this.http.delete(url);
    }
    deleteAllBlogsViaAPI() {
        const url = `${this.baseUrl}/blogs`;
        console.log('BlogService > deleteAllBlogsViaAPI > url: ', url);
        return this.http.delete(url);
    }
    seedDbBlogs(Nposts) {
        const url = `${this.baseUrl}/seed_db_posts`;
        console.log('BlogService > seedDbBlogs > url: ', url);
        return this.http.post(url, { Nposts: Nposts }, httpOptions);
    }
    /////////////////////////////////////////////////////////////////////////////////////////////
    deleteBlogFromClassArray(_id) {
        const idx = this.blogs.findIndex(blog => blog._id == _id);
        this.blogs.splice(idx, 1);
    }
    deleteAllBlogsFromClassArray() {
        this.blogs = [];
        return [];
    }
    getNumBlogs() {
        return this.blogs.length;
    }
    getBlogsFromClassArray() {
        console.log('calling BlogService > getBlogsFromClassArray > this.blogs: ', this.blogs);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.blogs);
    }
    setBlogs(blogs) {
        this.blogs = blogs;
    }
    addBlogToClassArray(blog) {
        this.blogs.push(blog);
    }
    updateBlogInClassArray(_id, blog) {
        const idx = this.blogs.findIndex(blog => blog._id == _id);
        console.log('BlogService > updateBlogInClassArray > idx: ', idx);
        if (idx) {
            this.blogs[idx] = blog;
        }
    }
}
BlogService.ɵfac = function BlogService_Factory(t) { return new (t || BlogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
BlogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BlogService, factory: BlogService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "c1X2":
/*!***********************************************************************!*\
  !*** ./src/app/components/edit-blog-form/edit-blog-form.component.ts ***!
  \***********************************************************************/
/*! exports provided: EditBlogFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBlogFormComponent", function() { return EditBlogFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/blog.service */ "a+Xp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





//import { Blog } from '../../models/blog';
class EditBlogFormComponent {
    constructor(blogService, activatedRoute) {
        this.blogService = blogService;
        this.activatedRoute = activatedRoute;
        this.buttonText = 'Submit';
        this.submitEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.blog = {};
        this._id = this.activatedRoute.snapshot.params._id;
        console.log('EditBlogFormComponent > constructor > this._id', this._id);
    }
    ngOnInit() {
        if (this._id) {
            this.blogService.getBlog(this._id).subscribe(blog => {
                this.blog = blog;
                console.log('EditBlogFormComponent > ngOnInit > this.blog: ', this.blog);
            });
        }
    }
    OnSubmit(value) {
        console.log('EditBlogFormComponent > OnSubmit > value', value);
        let editedBlog = Object.assign(this.blog, value);
        console.log('after Object.assign', editedBlog);
        this.submitEvent.emit(editedBlog);
    }
}
EditBlogFormComponent.ɵfac = function EditBlogFormComponent_Factory(t) { return new (t || EditBlogFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
EditBlogFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditBlogFormComponent, selectors: [["app-edit-blog-form"]], inputs: { buttonText: "buttonText" }, outputs: { submitEvent: "submitEvent" }, decls: 12, vars: 3, consts: [[1, "form-container"], [3, "ngSubmit"], ["f", "ngForm"], ["for", "title"], ["type", "text", "name", "title", "placeholder", "Enter the title...", 3, "ngModel", "ngModelChange"], ["for", "body"], ["name", "body", "placeholder", "Write a blog...", 3, "ngModel", "ngModelChange"], ["type", "submit"]], template: function EditBlogFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditBlogFormComponent_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.OnSubmit(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditBlogFormComponent_Template_input_ngModelChange_5_listener($event) { return (ctx.blog == null ? null : ctx.blog.title) ? ctx.blog.title = $event : null; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditBlogFormComponent_Template_textarea_ngModelChange_8_listener($event) { return (ctx.blog == null ? null : ctx.blog.body) ? ctx.blog.body = $event : null; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.blog == null ? null : ctx.blog.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.blog == null ? null : ctx.blog.body);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttonText);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".form-container[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    margin-top: 20px;\r\n    padding: 25px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 10px;\r\n    box-shadow: 0 4px 4px -1px rgba(0,0,0,0.2);\r\n}\r\n\r\nform[_ngcontent-%COMP%], label[_ngcontent-%COMP%], input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n}\r\n\r\ninput[_ngcontent-%COMP%], label[_ngcontent-%COMP%], button[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\r\n    outline: none !important;\r\n    border: 2px solid rgb(160, 250, 200);\r\n    box-shadow: 0 0 5px -1px rgb(160, 250, 200);\r\n}\r\n\r\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n    padding: 6px;\r\n    margin-bottom: 20px;\r\n    border-radius: 5px;\r\n    border: 2px solid #ddd;\r\n    box-shadow: 0 0 5px -1px #ddd;\r\n}\r\n\r\ntextarea[_ngcontent-%COMP%] {\r\n    height: 300px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::placeholder {\r\n    font-size: 13px;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n    padding: 6px;\r\n    font-size: 17px;\r\n    font-family: Calibri, sans-serif;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    padding: 4px 6px;\r\n    background-color: rgb(0, 123, 255); \r\n    color: white;\r\n    border: 0px;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:focus {\r\n    outline: none !important;\r\n    border: 1px solid darkblue;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0LWJsb2ctZm9ybS9lZGl0LWJsb2ctZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixvQ0FBb0M7SUFDcEMsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0NBQWtDLEVBQUUsc0JBQXNCO0lBQzFELFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsMEJBQTBCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lZGl0LWJsb2ctZm9ybS9lZGl0LWJsb2ctZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3JtLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA0cHggLTFweCByZ2JhKDAsMCwwLDAuMik7XHJcbn1cclxuXHJcbmZvcm0sIGxhYmVsLCBpbnB1dCwgdGV4dGFyZWEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlucHV0LCBsYWJlbCwgYnV0dG9uLCB0ZXh0YXJlYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cywgdGV4dGFyZWE6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDE2MCwgMjUwLCAyMDApO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAtMXB4IHJnYigxNjAsIDI1MCwgMjAwKTtcclxufVxyXG5cclxuaW5wdXQsIHRleHRhcmVhIHtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZGRkO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAtMXB4ICNkZGQ7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbjo6cGxhY2Vob2xkZXIge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LWZhbWlseTogQ2FsaWJyaSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDRweCA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTIzLCAyNTUpOyAvKiAgcmdiKDQwLCAxNjcsIDY5KSAqL1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrYmx1ZTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditBlogFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-blog-form',
                templateUrl: './edit-blog-form.component.html',
                styleUrls: ['./edit-blog-form.component.css']
            }]
    }], function () { return [{ type: _services_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, { buttonText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], submitEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "dYM4":
/*!*************************************************************!*\
  !*** ./src/app/components/edit-blog/edit-blog.component.ts ***!
  \*************************************************************/
/*! exports provided: EditBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBlogComponent", function() { return EditBlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/blog.service */ "a+Xp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_blog_form_edit_blog_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../edit-blog-form/edit-blog-form.component */ "c1X2");





class EditBlogComponent {
    constructor(blogService, activatedRoute, router) {
        this.blogService = blogService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this._id = this.activatedRoute.snapshot.params._id;
    }
    ngOnInit() {
        this.blogService.getBlog(this._id).subscribe(blog => {
            this.blog = blog;
            console.log(this.blog);
        });
    }
    onSubmitEditBlog(blog) {
        console.log('EditBlogComponent > onSubmitEditBlog > value: ', blog);
        this.blogService.updateBlogViaAPI(blog._id, blog)
            .subscribe(resp => {
            console.log('EditBlogComponent > onSubmitEditBlog > resp: ', resp);
            this.blogService.addBlogToClassArray(blog);
            const redirectUrl = `/blogs/${blog._id}`;
            this.router.navigateByUrl(redirectUrl);
        });
    }
}
EditBlogComponent.ɵfac = function EditBlogComponent_Factory(t) { return new (t || EditBlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
EditBlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditBlogComponent, selectors: [["app-edit-blog"]], decls: 3, vars: 0, consts: [["buttonText", "Update", 3, "submitEvent"]], template: function EditBlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit Your Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-edit-blog-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submitEvent", function EditBlogComponent_Template_app_edit_blog_form_submitEvent_2_listener($event) { return ctx.onSubmitEditBlog($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_edit_blog_form_edit_blog_form_component__WEBPACK_IMPORTED_MODULE_3__["EditBlogFormComponent"]], styles: ["h2[_ngcontent-%COMP%] {\r\n    font-family: 'Raleway', sans-serif;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    font-size: 24px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0LWJsb2cvZWRpdC1ibG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksa0NBQWtDO0lBQ2xDLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC1ibG9nL2VkaXQtYmxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmgyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditBlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-blog',
                templateUrl: './edit-blog.component.html',
                styleUrls: ['./edit-blog.component.css']
            }]
    }], function () { return [{ type: _services_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "ppPG":
/*!*******************************************************************!*\
  !*** ./src/app/components/display-blog/display-blog.component.ts ***!
  \*******************************************************************/
/*! exports provided: DisplayBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayBlogComponent", function() { return DisplayBlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




class DisplayBlogComponent {
    constructor() { }
    ngOnInit() { }
}
DisplayBlogComponent.ɵfac = function DisplayBlogComponent_Factory(t) { return new (t || DisplayBlogComponent)(); };
DisplayBlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DisplayBlogComponent, selectors: [["app-display-blog"]], inputs: { blog: "blog" }, decls: 13, vars: 8, consts: [[1, "blog-card"], [3, "routerLink"], [1, "user-id-text"]], template: function DisplayBlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u00A0\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/blogs/" + (ctx.blog == null ? null : ctx.blog._id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.blog == null ? null : ctx.blog.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.blog == null ? null : ctx.blog.body);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("User id: ", ctx.blog == null ? null : ctx.blog.userId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 5, ctx.blog == null ? null : ctx.blog.createdAt, "h:mm a, MMM d y"));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: ["*[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n}\r\n\r\n.blog-card[_ngcontent-%COMP%] {\r\n    \r\n    border: 0.5px solid #ccc;\r\n    border-radius: 5px;\r\n    margin-bottom: 15px;\r\n    padding: 10px;\r\n    \r\n    box-shadow: 0 4px 4px -1px rgba(0,0,0,0.2);\r\n    transition: 0.3s;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n    padding: 5px 5px 8px 5px;\r\n    margin: 0px 0;\r\n}\r\n\r\nh3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: rgb(124, 120, 168);    \r\n    text-decoration: none;\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n}\r\n\r\nh3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: seagreen;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n}\r\n\r\n.user-id-text[_ngcontent-%COMP%] {\r\n    font-size: 11px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaXNwbGF5LWJsb2cvZGlzcGxheS1ibG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsMENBQTBDO0lBQzFDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0kseUJBQXlCLEtBQUssa0JBQWtCO0lBQ2hELHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kaXNwbGF5LWJsb2cvZGlzcGxheS1ibG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuKiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJsb2ctY2FyZCB7XHJcbiAgICBcclxuICAgIGJvcmRlcjogMC41cHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgLyogYm94LXNoYWRvdzogMHB4IDBweCA4cHggLTFweCAjOTk5OyAqL1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggNHB4IC0xcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuaDMge1xyXG4gICAgcGFkZGluZzogNXB4IDVweCA4cHggNXB4O1xyXG4gICAgbWFyZ2luOiAwcHggMDtcclxufVxyXG5cclxuaDMgYSB7XHJcbiAgICBjb2xvcjogcmdiKDEyNCwgMTIwLCAxNjgpOyAgICAvKiByZ2IoMCwgNzcsIDApICovXHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG5oMyBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiBzZWFncmVlbjtcclxufVxyXG5cclxucCB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi51c2VyLWlkLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DisplayBlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-display-blog',
                templateUrl: './display-blog.component.html',
                styleUrls: ['./display-blog.component.css']
            }]
    }], function () { return []; }, { blog: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");






const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
class UserService {
    constructor(http) {
        this.http = http;
        //baseUrl = 'http://localhost:3000/api';
        //baseUrl = `${environment.API_BASE_URL}:${environment.PORT}/api`;
        this.baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_BASE_URL}/api`; // :${environment.PORT}
        this.users = [];
    }
    getUsers() {
        return this.getUsersFromAPI();
    }
    getUsersFromAPI() {
        console.log('calling UserService > getUsersFromAPI > this.users: ', this.users);
        const url = `${this.baseUrl}/users`;
        console.log('UserService > getUsersFromAPI > url', url);
        return this.http.get(url);
    }
    getUserFromAPI(_id) {
        console.log('UserService > getUserFromAPI > _id: ', _id);
        const url = `${this.baseUrl}/users/${_id}`;
        return this.http.get(url);
    }
    //////////////////////////////////////////////////////////////////////////////////
    getUsersFromClassArray() {
        console.log('calling UserService > getUsersFromClassArray > this.users: ', this.users);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.users);
    }
    getUser(_id) {
        const user = this.users.find(user => user._id == _id);
        if (user) {
            console.log('in UserService > getUser > returning: ObservableOf(user)');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(user);
        }
        else {
            console.log('in UserService > getUser > returning: this.getUserFromAPI(_id)');
            return this.getUserFromAPI(_id);
        }
    }
    setUsers(users) {
        this.users = users;
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/about/about.component */ "+DhY");
/* harmony import */ var _components_add_blog_add_blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/add-blog/add-blog.component */ "UzNh");
/* harmony import */ var _components_blog_item_blog_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/blog-item/blog-item.component */ "+3/u");
/* harmony import */ var _components_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/edit-blog/edit-blog.component */ "dYM4");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "JzmT");










const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'blogs', redirectTo: '', pathMatch: 'full' },
    { path: 'blogs/:_id', component: _components_blog_item_blog_item_component__WEBPACK_IMPORTED_MODULE_4__["BlogItemComponent"] },
    { path: 'add', component: _components_add_blog_add_blog_component__WEBPACK_IMPORTED_MODULE_3__["AddBlogComponent"] },
    { path: 'edit/:_id', component: _components_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_5__["EditBlogComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: '404', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"] },
    { path: '**', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map