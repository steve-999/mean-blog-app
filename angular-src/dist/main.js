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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/blog.service */ "a+Xp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loader/loader.component */ "vPOg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _display_blog_display_blog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../display-blog/display-blog.component */ "ppPG");









function BlogItemComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogItemComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onEditClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BlogItemComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogItemComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onDeleteClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BlogItemComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add styling with ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Markdown");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " and/or HTML.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class BlogItemComponent {
    constructor(blogService, activatedRoute, authService, router) {
        this.blogService = blogService;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.router = router;
        this.userIsOwner = false;
        this.showLoader = false;
        this._id = this.activatedRoute.snapshot.params._id;
    }
    ngOnInit() {
        this.showLoader = true;
        this.blogService.getBlog(this._id)
            .subscribe(resp => {
            this.showLoader = false;
            this.blog = resp;
            const userId = this.authService.getLoggedInUserId();
            this.userIsOwner = this.blog.userId === userId;
            document.title = `MEAN Blog App | ${this.blog.title}`;
        }, err => {
            this.showLoader = false;
            console.log(err);
        });
    }
    onEditClick() {
        this.router.navigate([`/edit/${this._id}`], { state: { data: this.blog } });
    }
    onDeleteClick() {
        const _id = this.blog._id;
        this.showLoader = true;
        this.blogService.deleteBlog(_id).subscribe(resp => {
            this.showLoader = false;
            this.router.navigateByUrl('/dashboard');
        }, err => {
            this.showLoader = false;
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"] && err.status === 401) {
                console.log('BlogItemComponent > onDeleteClick > err', err);
                this.router.navigate(['/login'], { state: { message: 'You are not authorized to perform that operation' } });
            }
            else {
                console.log(err);
            }
        });
    }
}
BlogItemComponent.ɵfac = function BlogItemComponent_Factory(t) { return new (t || BlogItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
BlogItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogItemComponent, selectors: [["app-blog-item"]], decls: 7, vars: 5, consts: [[3, "showLoader"], [1, "blog-container"], [1, "buttons-container"], ["class", "edit-button", 3, "click", 4, "ngIf"], ["class", "delete-button", 3, "click", 4, "ngIf"], ["parent", "blog-item-component", 3, "blog"], ["class", "styling-comment", 4, "ngIf"], [1, "edit-button", 3, "click"], [1, "delete-button", 3, "click"], [1, "styling-comment"], ["href", "https://www.markdownguide.org/cheat-sheet/", "target", "_blank"]], template: function BlogItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BlogItemComponent_button_3_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BlogItemComponent_button_4_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-display-blog", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BlogItemComponent_div_6_Template, 6, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showLoader", ctx.showLoader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsOwner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsOwner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blog", ctx.blog);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsOwner);
    } }, directives: [_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__["LoaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _display_blog_display_blog_component__WEBPACK_IMPORTED_MODULE_7__["DisplayBlogComponent"]], styles: [".component-container[_ngcontent-%COMP%] {\r\n    margin: 40px auto;\r\n}\r\n\r\n.buttons-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.edit-button[_ngcontent-%COMP%], .delete-button[_ngcontent-%COMP%] {\r\n    color: white;\r\n    width: 100px;\r\n    font-size: 14px;\r\n    border: none;\r\n    border-radius: 8px;\r\n    margin: 0 10px;\r\n    padding: 6px 10px;\r\n    cursor: pointer;\r\n    transition: 0.2s;\r\n}\r\n\r\n.edit-button[_ngcontent-%COMP%] {\r\n    background-color: SeaGreen;\r\n}\r\n\r\n.edit-button[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(63, 194, 120);\r\n}\r\n\r\n.delete-button[_ngcontent-%COMP%] {\r\n    background-color: indianred;  \r\n}\r\n\r\n.delete-button[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(241, 111, 111);  \r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: darkslateblue;\r\n    font-weight: 600;\r\n    text-decoration: none;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n    color: crimson;\r\n    text-decoration: underline;\r\n}\r\n\r\n.styling-comment[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    margin: 0 auto;\r\n}\r\n\r\n.blog-container[_ngcontent-%COMP%] {\r\n    margin: 0 auto 50px auto;\r\n    max-width: 900px;\r\n    width: 80%;\r\n}\r\n\r\n@media screen and (max-width: 800px) {\r\n    .blog-container[_ngcontent-%COMP%] { width: 85%; }\r\n}\r\n\r\n@media screen and (max-width: 650px) {\r\n    .blog-container[_ngcontent-%COMP%] { width: 90%; }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ibG9nLWl0ZW0vYmxvZy1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCLFVBQVUsRUFBRTtBQUNsQzs7QUFFQTtJQUNJLGtCQUFrQixVQUFVLEVBQUU7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Jsb2ctaXRlbS9ibG9nLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY29tcG9uZW50LWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDQwcHggYXV0bztcclxufVxyXG5cclxuLmJ1dHRvbnMtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmVkaXQtYnV0dG9uLCAuZGVsZXRlLWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICAgIHBhZGRpbmc6IDZweCAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycztcclxufVxyXG5cclxuLmVkaXQtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IFNlYUdyZWVuO1xyXG59XHJcblxyXG4uZWRpdC1idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYzLCAxOTQsIDEyMCk7XHJcbn1cclxuXHJcbi5kZWxldGUtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluZGlhbnJlZDsgIFxyXG59XHJcblxyXG4uZGVsZXRlLWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAxMTEsIDExMSk7ICBcclxufVxyXG5cclxuYSB7XHJcbiAgICBjb2xvcjogZGFya3NsYXRlYmx1ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gICAgY29sb3I6IGNyaW1zb247XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLnN0eWxpbmctY29tbWVudCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5ibG9nLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDAgYXV0byA1MHB4IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC5ibG9nLWNvbnRhaW5lciB7IHdpZHRoOiA4NSU7IH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIC5ibG9nLWNvbnRhaW5lciB7IHdpZHRoOiA5MCU7IH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog-item',
                templateUrl: './blog-item.component.html',
                styleUrls: ['./blog-item.component.css']
            }]
    }], function () { return [{ type: _services_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/message.service */ "tZre");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function HeaderComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_9_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onClickLink("/add"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_10_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onClickLink("/admin"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Signup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_14_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.logoutUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(authService, router, messageService, userService) {
        this.authService = authService;
        this.router = router;
        this.messageService = messageService;
        this.userService = userService;
        this.userId = '';
        this.username = '';
        this.userIsLoggedIn = false;
        this.message = {};
        this.message_subscription = this.messageService.getMessage()
            .subscribe(message => {
            this.updateNavLinks(message);
        });
    }
    ngOnInit() {
        this.updateNavLinks('refresh');
    }
    ngOnDestroy() {
        this.message_subscription.unsubscribe();
    }
    updateNavLinks(message) {
        this.message = { text: 'abcdefg' };
        this.userIsLoggedIn = this.authService.isloggedIn();
        this.userId = this.authService.getLoggedInUserId();
        if (this.userId) {
            this.userService.getUsername(this.userId)
                .subscribe(resp => this.username = resp.username, err => {
                this.username = '';
                console.log('updateNavLinks > getUsername > err', err);
            });
        }
        else {
            this.username = '';
        }
        this.authService.loggedInUserIsAdmin()
            .subscribe({
            next: val => {
                this.userIsAdmin = val;
            },
            error: err => console.log('updateNavLinks > loggedInUserIsAdmin > err', err)
        });
        this.message = message;
    }
    onClickLink(url) {
        if (this.router.url === '/login') {
            this.router.navigateByUrl('/blogs', { skipLocationChange: true })
                .then(() => this.router.navigate(['/login'], { state: { message: 'You are not authorized to perform that operation' } }));
        }
        else {
            this.router.navigate([url]);
        }
    }
    logoutUser() {
        this.authService.logoutUser();
        this.updateNavLinks('user has logged out');
        this.router.navigate(['/login']);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 18, vars: 7, consts: [[1, "logo"], ["routerLink", "/"], [1, "links-ul-container"], [3, "click", 4, "ngIf"], [4, "ngIf"], [1, "username"], ["href", "/dashboard"], [3, "click"], ["routerLink", "/add", 1, "router-link"], ["routerLink", "/admin", 1, "router-link"], ["routerLink", "/signup"], ["routerLink", "/login"], ["routerLink", "/dashboard"], ["routerLink", "/logout"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "MEAN Blog App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_li_9_Template, 3, 0, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeaderComponent_li_10_Template, 3, 0, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HeaderComponent_li_11_Template, 3, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HeaderComponent_li_12_Template, 3, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HeaderComponent_li_13_Template, 3, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HeaderComponent_li_14_Template, 3, 0, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userIsLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userIsLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.username);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["*[_ngcontent-%COMP%] {\r\n    background-color: slateblue; \r\n}\r\n\r\nheader[_ngcontent-%COMP%] {\r\n    height: 90px;\r\n    color: white;\r\n    margin-bottom: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\nh1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    font-family: Raleway, sans-serif;\r\n    font-size: 24px;\r\n    font-weight: 600;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] { \r\n    margin-top: 15px;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: rgb(255, 255, 101);\r\n    text-decoration: none;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n    color: white;\r\n    text-decoration: underline;\r\n}\r\n\r\n.links-ul-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    top: 14px;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    align-self: flex-start;\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n    float: left;\r\n    margin: 5px 10px;\r\n}\r\n\r\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font-size: 16px;\r\n}\r\n\r\n.router-link[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n\r\n.username[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 3%;\r\n    top: 8px;\r\n    color: rgb(255, 255, 101);\r\n    font-size: 16px;\r\n}\r\n\r\n@media screen and (max-width: 400px) {\r\n    h1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { font-size: 20px; }\r\n    li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { font-size: 15px; }\r\n    ul[_ngcontent-%COMP%] { position: relative; top: 7px; }\r\n    .username[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { font-size: 15px; }\r\n}\r\n\r\n@media screen and (max-width: 350px) {\r\n    h1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { font-size: 18px; }\r\n    li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { font-size: 14px; }\r\n    ul[_ngcontent-%COMP%] { position: relative; top: 9px; }\r\n    .username[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { font-size: 14px; }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUix5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLE9BQU8sZUFBZSxFQUFFO0lBQ3hCLE9BQU8sZUFBZSxFQUFFO0lBQ3hCLEtBQUssa0JBQWtCLEVBQUUsUUFBUSxFQUFFO0lBQ25DLGNBQWMsZUFBZSxFQUFFO0FBQ25DOztBQUVBO0lBQ0ksT0FBTyxlQUFlLEVBQUU7SUFDeEIsT0FBTyxlQUFlLEVBQUU7SUFDeEIsS0FBSyxrQkFBa0IsRUFBRSxRQUFRLEVBQUU7SUFDbkMsY0FBYyxlQUFlLEVBQUU7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4qIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHNsYXRlYmx1ZTsgXHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDZweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcblxyXG5oMSBhIHtcclxuICAgIGZvbnQtZmFtaWx5OiBSYWxld2F5LCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmxvZ28geyBcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMTAxKTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLmxpbmtzLXVsLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDE0cHg7XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG5saSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbjogNXB4IDEwcHg7XHJcbn1cclxuXHJcbmxpIGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5yb3V0ZXItbGluayB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi51c2VybmFtZSBhIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAzJTtcclxuICAgIHRvcDogOHB4O1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMTAxKTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgIGgxIGEgeyBmb250LXNpemU6IDIwcHg7IH1cclxuICAgIGxpIGEgeyBmb250LXNpemU6IDE1cHg7IH1cclxuICAgIHVsIHsgcG9zaXRpb246IHJlbGF0aXZlOyB0b3A6IDdweDsgfVxyXG4gICAgLnVzZXJuYW1lIGEgeyBmb250LXNpemU6IDE1cHg7IH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzUwcHgpIHtcclxuICAgIGgxIGEgeyBmb250LXNpemU6IDE4cHg7IH1cclxuICAgIGxpIGEgeyBmb250LXNpemU6IDE0cHg7IH1cclxuICAgIHVsIHsgcG9zaXRpb246IHJlbGF0aXZlOyB0b3A6IDlweDsgfVxyXG4gICAgLnVzZXJuYW1lIGEgeyBmb250LXNpemU6IDE0cHg7IH1cclxufVxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }]; }, null); })();


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
    production: true,
    //API_BASE_URL: 'http://localhost:5000',
    API_BASE_URL: 'https://mean-blog-app-896df.ondigitalocean.app',
    PORT: 5000,
    MIN_PASSWORD_LENGTH: 1,
    ADMIN_USER_EMAIL: 'admin@gmail.com',
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
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader/loader.component */ "vPOg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _display_blog_display_blog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../display-blog/display-blog.component */ "ppPG");







function HomeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-display-blog", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blog_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blog", blog_r1);
} }
class HomeComponent {
    constructor(blogService, userService) {
        this.blogService = blogService;
        this.userService = userService;
        this.blogs = [];
        this.users = [];
        this.showLoader = true;
    }
    ngOnInit() {
        document.title = 'MEAN Blog App | Home';
        this.fetchBlogs();
    }
    fetchBlogs() {
        this.showLoader = true;
        this.blogService.getBlogs()
            .subscribe(resp => {
            this.showLoader = false;
            this.blogs = resp;
        }, err => console.log('HomeComponent > fetchBlogs > err', err));
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 3, vars: 2, consts: [[3, "showLoader"], [1, "blog-list-container"], ["class", "blog-container", 4, "ngFor", "ngForOf"], [1, "blog-container"], ["parent", "home-component", 3, "blog"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showLoader", ctx.showLoader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.blogs);
    } }, directives: [_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _display_blog_display_blog_component__WEBPACK_IMPORTED_MODULE_5__["DisplayBlogComponent"]], styles: [".blog-list-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n}\r\n\r\n.blog-container[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n    max-width: 900px;\r\n    width: 80%;\r\n}\r\n\r\n@media screen and (max-width: 800px) {\r\n    .blog-container[_ngcontent-%COMP%] { width: 85%; }\r\n}\r\n\r\n@media screen and (max-width: 650px) {\r\n    .blog-container[_ngcontent-%COMP%] { width: 90%; }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0IsVUFBVSxFQUFFO0FBQ2xDOztBQUVBO0lBQ0ksa0JBQWtCLFVBQVUsRUFBRTtBQUNsQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmJsb2ctbGlzdC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ibG9nLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1heC13aWR0aDogOTAwcHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLmJsb2ctY29udGFpbmVyIHsgd2lkdGg6IDg1JTsgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgLmJsb2ctY29udGFpbmVyIHsgd2lkdGg6IDkwJTsgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _services_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }]; }, null); })();


/***/ }),

/***/ "CNy/":
/*!***********************************************!*\
  !*** ./src/app/services/fake-data.service.ts ***!
  \***********************************************/
/*! exports provided: FakeDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeDataService", function() { return FakeDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _models_blog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/blog */ "HU5n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "qfBg");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "lGQG");







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
class FakeDataService {
    constructor(http, userService, authService) {
        this.http = http;
        this.userService = userService;
        this.authService = authService;
        this.baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_BASE_URL}/api`;
        this.Nposts_per_user = 5;
        this.fakeUsers = [
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
        ];
        this.createdUsers = [];
    }
    createFakeUsers() {
        const url = `${this.baseUrl}/users`;
        this.fakeUsers.forEach(user => {
            this.http.post(url, user)
                .subscribe(resp => {
                this.createdUsers.push(resp);
                console.log('FakeDataService > createFakeUsers > resp', resp);
            }, err => console.log(err));
        });
    }
    createFakeBlogs() {
        let url = `${this.baseUrl}/createFakeBlogsForUser`;
        this.userService.getUsernames()
            .subscribe(users => {
            users.forEach(user => {
                this.http.post(url, { user: user, Nposts: this.Nposts_per_user })
                    .subscribe(resp => console.log(resp), err => console.log(err));
            });
            setTimeout(() => {
                const user = users.find(x => x.username === 'Guest');
                this.createBlogWithMarkdownHTML(user, blogUsingHTML, 'Blog using HTML');
                this.createBlogWithMarkdownHTML(user, blogUsingMarkdown, 'Blog using Markdown');
                setTimeout(() => {
                    console.log('logging user out after fake data creation');
                    this.authService.logoutUser();
                }, 2000);
            }, 2000);
        }, err => console.log(err));
    }
    createBlogWithMarkdownHTML(user, body, title) {
        console.log('createBlogWithMarkdownHTML > user', user);
        let url = `${this.baseUrl}/createFakeSingleBlog`;
        let blog = new _models_blog__WEBPACK_IMPORTED_MODULE_2__["Blog"]();
        blog = {
            userId: user._id,
            username: user.username,
            title: title,
            body: body,
            createdAt: (new Date()).toISOString(),
            updatedAt: (new Date()).toISOString(),
        };
        this.http.post(url, blog)
            .subscribe(resp => console.log(resp), err => console.log(err));
    }
}
FakeDataService.ɵfac = function FakeDataService_Factory(t) { return new (t || FakeDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
FakeDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FakeDataService, factory: FakeDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FakeDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "HU5n":
/*!********************************!*\
  !*** ./src/app/models/blog.ts ***!
  \********************************/
/*! exports provided: Blog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blog", function() { return Blog; });
class Blog {
}
;


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
    }], null, null); })();


/***/ }),

/***/ "Lns2":
/*!**************************************!*\
  !*** ./src/app/guards/edit.guard.ts ***!
  \**************************************/
/*! exports provided: EditGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditGuard", function() { return EditGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/blog.service */ "a+Xp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







class EditGuard {
    constructor(authService, blogService, router) {
        this.authService = authService;
        this.blogService = blogService;
        this.router = router;
    }
    canActivate(route, state) {
        const loggedInUserId = this.authService.getLoggedInUserId();
        const targetUrl = state.url;
        const urlArray = targetUrl.split('/');
        if (urlArray.length !== 3 || urlArray[1] !== 'edit') {
            return false;
        }
        const blog_id = urlArray[2];
        return this.blogService.getUserIdForBlog(blog_id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(blog_userId => {
            if (blog_userId === loggedInUserId) {
                return true;
            }
            else {
                this.router.navigate(['/login'], { state: { message: 'You are not authorized to perform that operation' } });
                return false;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            console.log('AccessGuard > canActivate > catchError', err);
            this.router.navigate(['/login'], { state: { message: 'You are not authorized to perform that operation' } });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
        }));
    }
}
EditGuard.ɵfac = function EditGuard_Factory(t) { return new (t || EditGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_blog_service__WEBPACK_IMPORTED_MODULE_4__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
EditGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EditGuard, factory: EditGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _services_blog_service__WEBPACK_IMPORTED_MODULE_4__["BlogService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "Lquv":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/blog.service */ "a+Xp");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/message.service */ "tZre");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loader/loader.component */ "vPOg");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");










function DashboardComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blog_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/blogs/" + (blog_r1 == null ? null : blog_r1._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blog_r1 == null ? null : blog_r1.title);
} }
const _c0 = function (a0) { return { "color": a0 }; };
class DashboardComponent {
    constructor(authService, blogService, userService, messageService) {
        this.authService = authService;
        this.blogService = blogService;
        this.userService = userService;
        this.messageService = messageService;
        this.userId = '';
        this.username = '';
        this.message = '';
        this.messageColor = 'seagreen';
        this.submitButtonEnabled = true;
        this.showLoader = false;
    }
    ngOnInit() {
        this.userId = this.authService.getLoggedInUserId();
        document.title = 'MEAN Blog App | Dashboard';
        this.showLoader = true;
        this.blogService.getBlogsForUserId(this.userId)
            .subscribe(resp => {
            this.showLoader = false;
            this.blogs = resp;
        }, err => {
            this.showLoader = false;
            console.log(err);
        });
        this.userService.getUsername(this.userId)
            .subscribe(resp => {
            this.username = resp.username;
        }, err => console.log(err));
    }
    onUpdateUsername() {
        if (!this.validateUsername(this.username)) {
            this.displayMessage('Invalid username', false);
            return;
        }
        this.showLoader = true;
        this.userService.updateUsername(this.userId, this.username)
            .subscribe(resp => {
            this.showLoader = false;
            this.displayMessage(`Username updated to ${resp}`, true);
            this.messageService.sendMessage('username has changed');
        }, err => {
            this.showLoader = false;
            console.log(err);
        });
    }
    handleInputChange(e) {
        this.username = e;
        this.validateUsername(this.username);
    }
    validateUsername(username) {
        if (username.length === 0) {
            this.displayMessage('Username is required', false);
            return false;
        }
        else if (username.length > 50) {
            this.displayMessage('Username cannot be over 50 characters', false);
            return false;
        }
        else if (!username.match(/^[A-Za-z0-9_ ]+$/)) {
            this.displayMessage('Username can only consist of letters, numbers, spaces and underscores', false);
            return false;
        }
        else {
            this.displayMessage('', true);
            return true;
        }
    }
    displayMessage(message, isValidUsername) {
        this.message = message;
        this.messageColor = isValidUsername ? 'seagreen' : 'crimson';
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 16, vars: 7, consts: [[3, "showLoader"], [1, "dashboard-container", "fadeInAnimation"], [1, "form-container"], ["type", "text", "name", "username", "placeholder", "Please enter a username", 3, "ngModel", "ngModelChange"], [1, "message", 3, "ngStyle"], ["type", "submit", 3, "click"], [1, "dashboard-blogs-list-container"], [1, "dashboard-blogs-list", "fadeInAnimation"], ["class", "dashboard-blog-item", 4, "ngFor", "ngForOf"], [1, "dashboard-blog-item"], [3, "routerLink"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_input_ngModelChange_6_listener($event) { return ctx.handleInputChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_9_listener() { return ctx.onUpdateUsername(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Your Blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DashboardComponent_li_15_Template, 3, 2, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showLoader", ctx.showLoader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.messageColor));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.blogs);
    } }, directives: [_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__["LoaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"]], styles: [".dashboard-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n    background-color: inherit;\r\n    text-align: center;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    letter-spacing: 0px;\r\n    color: darkslateblue;\r\n    margin-top: 0px;\r\n}\r\n\r\n.form-container[_ngcontent-%COMP%] {\r\n    max-width: 750px;\r\n    width: 80%;\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n    background-color: #eee;\r\n    border: 1px solid #ccc;\r\n    border-radius: 15px;\r\n    margin: 30px auto;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 90%;\r\n    margin: 0 auto;\r\n    box-sizing: border-box;\r\n    padding: 8px;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    color: darkslateblue;\r\n    width: 90%;\r\n    text-align: left;\r\n    margin: 20px auto 10px auto;\r\n    padding: 8px 0px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n    border: 1px solid #ddd;\r\n    margin: 10px auto;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus {\r\n    outline: none !important;\r\n    border: 2px solid cornflowerblue;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    margin: 12px auto 30px auto;\r\n}\r\n\r\n.message[_ngcontent-%COMP%] {\r\n    background-color: inherit;\r\n    height: 20px;\r\n    font-size: 14px;\r\n    color: seagreen;\r\n    width: 90%;\r\n    margin: 10px auto;\r\n}\r\n\r\n.dashboard-blogs-list-container[_ngcontent-%COMP%] {\r\n    max-width: 750px;\r\n    width: 80%;\r\n    background-color: #eee;\r\n    border: 1px solid #ccc;\r\n    border-radius: 15px;\r\n}\r\n\r\n.dashboard-blogs-list[_ngcontent-%COMP%] {\r\n    background-color: inherit;\r\n    width: 90%;\r\n    list-style-type: none;\r\n    margin: 20px auto 50px auto;\r\n    padding: 0px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.dashboard-blog-item[_ngcontent-%COMP%] {\r\n    background-color: inherit;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    padding: 6px 0;\r\n}\r\n\r\n.dashboard-blog-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    background-color: inherit;\r\n    width: 100%;\r\n    color: darkslateblue;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 17px;\r\n    font-weight: 600;\r\n    text-transform: capitalize;\r\n    letter-spacing: 0px;\r\n    text-decoration: none;\r\n}\r\n\r\n.dashboard-blog-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    text-decoration: underline;\r\n    color: crimson;\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n    .form-container[_ngcontent-%COMP%], .dashboard-blogs-list-container[_ngcontent-%COMP%] {\r\n        width: 85%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n    .form-container[_ngcontent-%COMP%], .dashboard-blogs-list-container[_ngcontent-%COMP%] {\r\n        width: 90%;\r\n    }\r\n    .dashboard-blog-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { font-size: 15px; }\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n    .dashboard-blog-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { font-size: 14px; }\r\n}\r\n\r\n@media screen and (max-width: 425px) {\r\n    .dashboard-blog-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { font-size: 13.5px; }\r\n}\r\n\r\n@media screen and (max-width: 350px) {\r\n    .dashboard-blog-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { font-size: 13px; }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBOzs7SUFHSSxjQUFjO0lBQ2QsVUFBVTtJQUNWLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGNBQWM7SUFDZCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsY0FBYztBQUNsQjs7QUFHQTtJQUNJOztRQUVJLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0k7O1FBRUksVUFBVTtJQUNkO0lBQ0EseUJBQXlCLGVBQWUsRUFBRTtBQUM5Qzs7QUFFQTtJQUNJLHlCQUF5QixlQUFlLEVBQUU7QUFDOUM7O0FBRUE7SUFDSSx5QkFBeUIsaUJBQWlCLEVBQUU7QUFDaEQ7O0FBRUE7SUFDSSx5QkFBeUIsZUFBZSxFQUFFO0FBQzlDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFzaGJvYXJkLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaDMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgY29sb3I6IGRhcmtzbGF0ZWJsdWU7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBtYXJnaW46IDMwcHggYXV0bztcclxufVxyXG5cclxubGFiZWwsXHJcbmlucHV0LFxyXG5idXR0b24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuaDMge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiBkYXJrc2xhdGVibHVlO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAxMHB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiA4cHggMHB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGNvcm5mbG93ZXJibHVlO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgbWFyZ2luOiAxMnB4IGF1dG8gMzBweCBhdXRvO1xyXG59XHJcblxyXG4ubWVzc2FnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6IHNlYWdyZWVuO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLWJsb2dzLWxpc3QtY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogNzUwcHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLWJsb2dzLWxpc3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byA1MHB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLWJsb2ctaXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDZweCAwO1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLWJsb2ctaXRlbSBhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiBkYXJrc2xhdGVibHVlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmRhc2hib2FyZC1ibG9nLWl0ZW0gYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGNvbG9yOiBjcmltc29uO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgIC5mb3JtLWNvbnRhaW5lcixcclxuICAgIC5kYXNoYm9hcmQtYmxvZ3MtbGlzdC1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuZm9ybS1jb250YWluZXIsXHJcbiAgICAuZGFzaGJvYXJkLWJsb2dzLWxpc3QtY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG4gICAgLmRhc2hib2FyZC1ibG9nLWl0ZW0gYSB7IGZvbnQtc2l6ZTogMTVweDsgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgLmRhc2hib2FyZC1ibG9nLWl0ZW0gYSB7IGZvbnQtc2l6ZTogMTRweDsgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xyXG4gICAgLmRhc2hib2FyZC1ibG9nLWl0ZW0gYSB7IGZvbnQtc2l6ZTogMTMuNXB4OyB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1MHB4KSB7XHJcbiAgICAuZGFzaGJvYXJkLWJsb2ctaXRlbSBhIHsgZm9udC1zaXplOiAxM3B4OyB9XHJcbn1cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return [{ type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: src_app_services_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "NxgW":
/*!*******************************************************!*\
  !*** ./src/app/services/token-interceptor.service.ts ***!
  \*******************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TokenInterceptorService {
    constructor(injector) {
        this.injector = injector;
    }
    intercept(req, next) {
        req = req.clone({
            withCredentials: true
        });
        return next.handle(req);
    }
}
TokenInterceptorService.ɵfac = function TokenInterceptorService_Factory(t) { return new (t || TokenInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
TokenInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenInterceptorService, factory: TokenInterceptorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


/***/ }),

/***/ "Ow/l":
/*!*****************************************************************************!*\
  !*** ./src/app/components/signup-login-form/signup-login-form.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SignupLoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupLoginFormComponent", function() { return SignupLoginFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/message.service */ "tZre");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loader/loader.component */ "vPOg");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








class SignupLoginFormComponent {
    constructor(authService, router, messageService) {
        this.authService = authService;
        this.router = router;
        this.messageService = messageService;
        this.email = '';
        this.password = '';
        this.emailError = '';
        this.passwordError = '';
        this.message = '';
        this.signup_login_type = '';
        this.showLoader = false;
    }
    ngOnInit() {
        if (this.router.url === '/login') {
            this.signup_login_type = 'Log in';
            document.title = 'MEAN Blog App | Log in';
        }
        else if (this.router.url === '/signup') {
            this.signup_login_type = 'Sign up';
            document.title = 'MEAN Blog App | Sign up';
        }
        if (history.state.message) {
            this.message = history.state.message;
        }
    }
    onSubmit() {
        if (!this.preSubmitValidation()) {
            return;
        }
        if (this.signup_login_type === 'Sign up') {
            this.showLoader = true;
            this.authService.signupUser({ email: this.email, password: this.password })
                .subscribe(resp => {
                this.showLoader = false;
                this.handleResponse(resp);
            }, err => {
                this.showLoader = false;
                this.handleErrors(err);
            });
        }
        else if (this.signup_login_type === 'Log in') {
            this.showLoader = true;
            this.authService.loginUser({ email: this.email, password: this.password })
                .subscribe(resp => {
                this.showLoader = false;
                this.handleResponse(resp);
            }, err => {
                this.showLoader = false;
                this.handleErrors(err);
            });
        }
    }
    handleResponse(resp) {
        this.messageService.sendMessage('user has logged in');
        this.router.navigate(['/dashboard']);
    }
    handleErrors(err) {
        console.log('SignupLoginFormComponent > onSubmit > err', err);
        const errorMessage = err.error;
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
    handleBlur(type, event) {
        const val = event.target.value;
        this.validateUserData(type, val);
    }
    validateUserData(type, val) {
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
        else if (this.password.length < src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].MIN_PASSWORD_LENGTH) {
            this.passwordError = `Passwords must be at least ${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].MIN_PASSWORD_LENGTH} characters`;
            return false;
        }
        else {
            return true;
        }
    }
}
SignupLoginFormComponent.ɵfac = function SignupLoginFormComponent_Factory(t) { return new (t || SignupLoginFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"])); };
SignupLoginFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupLoginFormComponent, selectors: [["app-signup-login-form"]], decls: 19, vars: 8, consts: [[3, "showLoader"], [1, "signup-login-form-container", "fadeInAnimation"], [1, "message"], ["for", "email"], ["type", "text", "name", "email", "placeholder", "Please enter your email address", 1, "input-email", 3, "ngModel", "ngModelChange", "blur"], [1, "error"], ["for", "password"], ["type", "password", "name", "password", "placeholder", "Please enter a password", 1, "input-password", 3, "ngModel", "ngModelChange", "blur"], [3, "click"]], template: function SignupLoginFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupLoginFormComponent_Template_input_ngModelChange_9_listener($event) { return ctx.validateUserData("Email", $event); })("blur", function SignupLoginFormComponent_Template_input_blur_9_listener($event) { return ctx.handleBlur("Email", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupLoginFormComponent_Template_input_ngModelChange_14_listener($event) { return ctx.validateUserData("Password", $event); })("blur", function SignupLoginFormComponent_Template_input_blur_14_listener($event) { return ctx.handleBlur("Password", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupLoginFormComponent_Template_button_click_17_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showLoader", ctx.showLoader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.signup_login_type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.emailError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.passwordError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.signup_login_type);
    } }, directives: [_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__["LoaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: [".signup-login-form-container[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n    max-width: 750px;\r\n    width: 75%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n    background-color: #f4f4f4;\r\n    width: 100%;\r\n    padding: 30px;\r\n    box-shadow: 1px 2px 3px rgba(0,0,0,0.1);\r\n    border-radius: 10px;\r\n    background: #eee;\r\n    border: 1px solid #ddd;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    background-color: inherit;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 21px;\r\n    font-weight: 700;\r\n    color: darkslateblue;\r\n    margin-bottom: 30px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n    padding: 10px 12px;\r\n    border-radius: 4px;\r\n    border: 1px solid #ddd;\r\n    font-size: 16px;\r\n    width: 100%;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus {\r\n    outline: none !important;\r\n    border: 2px solid cornflowerblue;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n    background-color: inherit;\r\n    display: block;\r\n    margin: 10px 0;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%], .message[_ngcontent-%COMP%] {\r\n    background-color: inherit;\r\n    color: #f03838;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    height: 20px;\r\n    transition: 1s;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\r\n    margin: 2px 2px;\r\n}\r\n\r\n.message[_ngcontent-%COMP%] {\r\n    margin: 30px auto 20px auto;\r\n    text-align: center;\r\n}\r\n\r\n@media screen and (max-width: 650px) {\r\n    .signup-login-form-container[_ngcontent-%COMP%] { width: 85%; }\r\n}\r\n\r\n@media screen and (max-width: 450px) {\r\n    .signup-login-form-container[_ngcontent-%COMP%] { width: 90%; }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWdudXAtbG9naW4tZm9ybS9zaWdudXAtbG9naW4tZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUkseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixrQkFBa0I7QUFDdEI7O0FBR0E7SUFDSSwrQkFBK0IsVUFBVSxFQUFFO0FBQy9DOztBQUVBO0lBQ0ksK0JBQStCLFVBQVUsRUFBRTtBQUMvQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbnVwLWxvZ2luLWZvcm0vc2lnbnVwLWxvZ2luLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uc2lnbnVwLWxvZ2luLWZvcm0tY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiA3NTBweDtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAycHggM3B4IHJnYmEoMCwwLDAsMC4xKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxufVxyXG5cclxuZm9ybSBoMiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiBkYXJrc2xhdGVibHVlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgcGFkZGluZzogMTBweCAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBjb3JuZmxvd2VyYmx1ZTtcclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbn1cclxuXHJcbmZvcm0gLmVycm9yLFxyXG4ubWVzc2FnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgY29sb3I6ICNmMDM4Mzg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMXM7XHJcbn1cclxuXHJcbmZvcm0gLmVycm9yIHtcclxuICAgIG1hcmdpbjogMnB4IDJweDtcclxufVxyXG5cclxuLm1lc3NhZ2Uge1xyXG4gICAgbWFyZ2luOiAzMHB4IGF1dG8gMjBweCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIC5zaWdudXAtbG9naW4tZm9ybS1jb250YWluZXIgeyB3aWR0aDogODUlOyB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAuc2lnbnVwLWxvZ2luLWZvcm0tY29udGFpbmVyIHsgd2lkdGg6IDkwJTsgfVxyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupLoginFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup-login-form',
                templateUrl: './signup-login-form.component.html',
                styleUrls: ['./signup-login-form.component.css']
            }]
    }], function () { return [{ type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "P4e2":
/*!********************************************!*\
  !*** ./src/app/shared/shared_functions.ts ***!
  \********************************************/
/*! exports provided: reverseHtmlChars, escapeHtmlChars */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverseHtmlChars", function() { return reverseHtmlChars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeHtmlChars", function() { return escapeHtmlChars; });
function reverseHtmlChars(text) {
    return text.replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&apos;/g, "'");
}
function escapeHtmlChars(text) {
    return text.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}


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
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'angular-src';
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "component-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".component-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvbXBvbmVudC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "Tk1w":
/*!***************************************!*\
  !*** ./src/app/guards/admin.guard.ts ***!
  \***************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AdminGuard {
    constructor(authService, userService, router) {
        this.authService = authService;
        this.userService = userService;
        this.router = router;
    }
    canActivate(route, state) {
        return this.authService.loggedInUserIsAdmin()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(resp => {
            if (resp === true) {
                return true;
            }
            else {
                this.router.navigate(['/login'], { state: { message: 'You are not authorized to perform that operation' } });
                return false;
            }
        }));
    }
}
AdminGuard.ɵfac = function AdminGuard_Factory(t) { return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AdminGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminGuard, factory: AdminGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "UTcu":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.authService.isloggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login'], { state: { message: 'You are not authorized to perform that operation' } });
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_blog_item_blog_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/blog-item/blog-item.component */ "+3/u");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/admin/admin.component */ "cCTE");
/* harmony import */ var _components_display_blog_display_blog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/display-blog/display-blog.component */ "ppPG");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "JzmT");
/* harmony import */ var _components_edit_blog_form_edit_blog_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/edit-blog-form/edit-blog-form.component */ "c1X2");
/* harmony import */ var _components_signup_login_form_signup_login_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/signup-login-form/signup-login-form.component */ "Ow/l");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./guards/auth.guard */ "UTcu");
/* harmony import */ var _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/token-interceptor.service */ "NxgW");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "Lquv");
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./guards/admin.guard */ "Tk1w");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/loader/loader.component */ "vPOg");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");

























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_22__["CookieService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"], _guards_admin_guard__WEBPACK_IMPORTED_MODULE_20__["AdminGuard"], { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_18__["TokenInterceptorService"], multi: true }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot({})
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
        _components_blog_item_blog_item_component__WEBPACK_IMPORTED_MODULE_10__["BlogItemComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
        _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_12__["AdminComponent"],
        _components_display_blog_display_blog_component__WEBPACK_IMPORTED_MODULE_13__["DisplayBlogComponent"],
        _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"],
        _components_edit_blog_form_edit_blog_form_component__WEBPACK_IMPORTED_MODULE_15__["EditBlogFormComponent"],
        _components_signup_login_form_signup_login_form_component__WEBPACK_IMPORTED_MODULE_16__["SignupLoginFormComponent"],
        _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["DashboardComponent"],
        _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_21__["LoaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreRootModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                    _components_blog_item_blog_item_component__WEBPACK_IMPORTED_MODULE_10__["BlogItemComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                    _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_12__["AdminComponent"],
                    _components_display_blog_display_blog_component__WEBPACK_IMPORTED_MODULE_13__["DisplayBlogComponent"],
                    _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"],
                    _components_edit_blog_form_edit_blog_form_component__WEBPACK_IMPORTED_MODULE_15__["EditBlogFormComponent"],
                    _components_signup_login_form_signup_login_form_component__WEBPACK_IMPORTED_MODULE_16__["SignupLoginFormComponent"],
                    _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["DashboardComponent"],
                    _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_21__["LoaderComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot({})
                ],
                providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_22__["CookieService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"], _guards_admin_guard__WEBPACK_IMPORTED_MODULE_20__["AdminGuard"], { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_18__["TokenInterceptorService"], multi: true }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");





const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
class BlogService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_BASE_URL}/api`;
        this.blogs = [];
    }
    getBlogs() {
        const url = `${this.baseUrl}/blogs`;
        return this.http.get(url);
    }
    getBlogsForUserId(userId) {
        const url = `${this.baseUrl}/blogs4userId/${userId}`;
        return this.http.get(url);
    }
    getUserIdForBlog(blog_id) {
        const url = `${this.baseUrl}/useridForBlog/${blog_id}`;
        return this.http.get(url);
    }
    getBlog(_id) {
        const url = `${this.baseUrl}/blogs/${_id}`;
        return this.http.get(url);
    }
    addBlog(blog) {
        const url = `${this.baseUrl}/blogs`;
        return this.http.post(url, blog, httpOptions);
    }
    updateBlog(_id, blog) {
        const url = `${this.baseUrl}/blogs/${_id}`;
        return this.http.put(url, blog, httpOptions);
    }
    deleteBlog(_id) {
        const url = `${this.baseUrl}/blogs/${_id}`;
        return this.http.delete(url);
    }
    deleteAllBlogs() {
        const url = `${this.baseUrl}/blogs`;
        return this.http.delete(url);
    }
    seedDbBlogs(Nposts) {
        const url = `${this.baseUrl}/seed_db_posts`;
        return this.http.post(url, { Nposts: Nposts }, httpOptions);
    }
}
BlogService.ɵfac = function BlogService_Factory(t) { return new (t || BlogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
BlogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BlogService, factory: BlogService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_shared_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared_functions */ "P4e2");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/blog.service */ "a+Xp");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../loader/loader.component */ "vPOg");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









class EditBlogFormComponent {
    constructor(blogService, authService, activatedRoute, router) {
        this.blogService = blogService;
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.blog = { title: '', body: '', userId: '', username: '' };
        this.errorMessage = '';
        this.showLoader = false;
    }
    ngOnInit() {
        this.userId = this.authService.getLoggedInUserId();
        this.username = this.authService.getLoggedInUsername();
        if (this.router.url === '/add') {
            this.pageType = 'add';
            this.pageHeading = 'New Blog';
            this.submitButtonText = 'Create';
            this.blog_id = undefined;
        }
        else if (this.router.url.startsWith('/edit')) {
            this.pageType = 'edit';
            this.pageHeading = 'Edit Your Blog';
            this.submitButtonText = 'Update';
            this.blog_id = this.activatedRoute.snapshot.params._id;
            if (history.state.data) {
                this.blog = history.state.data;
                this.blog.title = Object(_shared_shared_functions__WEBPACK_IMPORTED_MODULE_2__["reverseHtmlChars"])(this.blog.title);
                this.blog.body = Object(_shared_shared_functions__WEBPACK_IMPORTED_MODULE_2__["reverseHtmlChars"])(this.blog.body);
            }
        }
    }
    ngOnChanges() {
        if (history.state.data) {
            this.blog = history.state.data;
            this.blog.title = Object(_shared_shared_functions__WEBPACK_IMPORTED_MODULE_2__["reverseHtmlChars"])(this.blog.title);
            this.blog.body = Object(_shared_shared_functions__WEBPACK_IMPORTED_MODULE_2__["reverseHtmlChars"])(this.blog.body);
        }
    }
    onSubmit() {
        if (!this.validateBlog(this.blog)) {
            return;
        }
        this.blog.title = Object(_shared_shared_functions__WEBPACK_IMPORTED_MODULE_2__["escapeHtmlChars"])(this.blog.title);
        this.blog.body = Object(_shared_shared_functions__WEBPACK_IMPORTED_MODULE_2__["escapeHtmlChars"])(this.blog.body);
        if (this.pageType === 'add') {
            this.onSubmitAddBlog(this.blog);
            document.title = 'MEAN Blog App | Create New Blog';
        }
        else if (this.pageType === 'edit') {
            this.onSubmitEditBlog(this.blog);
            document.title = 'MEAN Blog App | Edit Blog';
        }
    }
    onSubmitAddBlog(blog) {
        blog = Object.assign(Object.assign({}, blog), { userId: this.userId, username: this.username });
        this.showLoader = true;
        this.blogService.addBlog(blog)
            .subscribe(resp => {
            this.showLoader = false;
            const redirectUrl = `/blogs/${resp._id}`;
            this.router.navigateByUrl(redirectUrl);
        }, err => {
            this.showLoader = false;
            this.handleErrors(err);
        });
    }
    onSubmitEditBlog(blog) {
        this.showLoader = true;
        this.blogService.updateBlog(this.blog_id, blog)
            .subscribe(resp => {
            this.showLoader = false;
            const redirectUrl = `/blogs/${this.blog_id}`;
            this.router.navigateByUrl(redirectUrl);
        }, err => {
            this.showLoader = false;
            this.handleErrors(err);
        });
    }
    handleErrors(err) {
        if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
            console.log('EditBlogFormComponent > handleErrors > err', err);
            if (err.status === 401) {
                this.router.navigate(['/login'], { state: { message: 'You are not authorized to perform that operation' } });
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
EditBlogFormComponent.ɵfac = function EditBlogFormComponent_Factory(t) { return new (t || EditBlogFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
EditBlogFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditBlogFormComponent, selectors: [["app-edit-blog-form"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 17, vars: 6, consts: [[3, "showLoader"], [1, "edit-blog-form-container"], [1, "form-container", "fadeInAnimation"], [1, "error-message"], ["for", "title"], ["type", "text", "name", "title", "placeholder", "Enter the title...", 3, "ngModel", "ngModelChange"], ["for", "body"], ["name", "body", "placeholder", "Write a blog...", 3, "ngModel", "ngModelChange"], ["type", "submit", 3, "click"]], template: function EditBlogFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-loader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditBlogFormComponent_Template_input_ngModelChange_10_listener($event) { return ctx.blog.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditBlogFormComponent_Template_textarea_ngModelChange_13_listener($event) { return ctx.blog.body = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditBlogFormComponent_Template_button_click_15_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showLoader", ctx.showLoader);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.pageHeading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.blog.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.blog.body);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.submitButtonText);
    } }, directives: [_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]], styles: [".edit-blog-form-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    font-family: 'Roboto', sans-serif;\r\n    color: darkslateblue;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    letter-spacing: 0px;\r\n}\r\n\r\n.form-container[_ngcontent-%COMP%] {\r\n    max-width: 900px;\r\n    width: 80%;\r\n    background-color: #eee;\r\n    margin: 20px auto 50px auto;\r\n    padding: 25px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 10px;\r\n    box-shadow: 0 4px 4px -1px rgba(0,0,0,0.2);\r\n}\r\n\r\nform[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\r\n    background-color: #eee;\r\n}\r\n\r\ninput[_ngcontent-%COMP%], label[_ngcontent-%COMP%], button[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n    padding: 6px;\r\n    margin-bottom: 20px;\r\n    border-radius: 5px;\r\n    border: 1px solid #ddd;\r\n    box-shadow: 0 0 5px -1px #ddd;\r\n}\r\n\r\ntextarea[_ngcontent-%COMP%] {\r\n    height: 300px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\r\n    outline: none !important;\r\n    border: 2px solid cornflowerblue;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n    padding: 6px;\r\n    font-size: 17px;\r\n    font-family: Calibri, sans-serif;\r\n}\r\n\r\n.error-message[_ngcontent-%COMP%] {\r\n    background-color: #eee;\r\n    height: 16px;\r\n    color: crimson;\r\n    font-size: 16px;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n}\r\n\r\n@media screen and (max-width: 800px) {\r\n    .form-container[_ngcontent-%COMP%] { width: 85%; }\r\n}\r\n\r\n@media screen and (max-width: 650px) {\r\n    .form-container[_ngcontent-%COMP%] { width: 90%; }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0LWJsb2ctZm9ybS9lZGl0LWJsb2ctZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksd0JBQXdCO0lBQ3hCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixjQUFjO0lBQ2QsZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBR0E7SUFDSSxrQkFBa0IsVUFBVSxFQUFFO0FBQ2xDOztBQUVBO0lBQ0ksa0JBQWtCLFVBQVUsRUFBRTtBQUNsQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC1ibG9nLWZvcm0vZWRpdC1ibG9nLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0LWJsb2ctZm9ybS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiBkYXJrc2xhdGVibHVlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogOTAwcHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvIDUwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDRweCAtMXB4IHJnYmEoMCwwLDAsMC4yKTtcclxufVxyXG5cclxuZm9ybSwgbGFiZWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxufVxyXG5cclxuaW5wdXQsIGxhYmVsLCBidXR0b24sIHRleHRhcmVhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlucHV0LCB0ZXh0YXJlYSB7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggLTFweCAjZGRkO1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyxcclxudGV4dGFyZWE6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgY29ybmZsb3dlcmJsdWU7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGZvbnQtZmFtaWx5OiBDYWxpYnJpLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZXJyb3ItbWVzc2FnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgY29sb3I6IGNyaW1zb247XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAuZm9ybS1jb250YWluZXIgeyB3aWR0aDogODUlOyB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICAuZm9ybS1jb250YWluZXIgeyB3aWR0aDogOTAlOyB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditBlogFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-edit-blog-form',
                templateUrl: './edit-blog-form.component.html',
                styleUrls: ['./edit-blog-form.component.css']
            }]
    }], function () { return [{ type: _services_blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "cCTE":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/blog.service */ "a+Xp");
/* harmony import */ var _services_fake_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../..//services/fake-data.service */ "CNy/");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");





class AdminComponent {
    constructor(blogService, fakeDataService, userService) {
        this.blogService = blogService;
        this.fakeDataService = fakeDataService;
        this.userService = userService;
    }
    ngOnInit() {
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
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_fake_data_service__WEBPACK_IMPORTED_MODULE_2__["FakeDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 8, vars: 0, consts: [["type", "button", 1, "delete-button", 3, "click"], ["type", "button", 3, "click"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_0_listener() { return ctx.deleteAllBlogs(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "delete all blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_2_listener() { return ctx.deleteAllUsers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "delete all users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_4_listener() { return ctx.createFakeUsers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "create fake users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_6_listener() { return ctx.createFakeBlogs(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "create fake blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["button[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 200px;\r\n    margin: 15px;\r\n    padding: 4px 10px;\r\n    background-color: #0275d8;\r\n    color: white;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n.delete-button[_ngcontent-%COMP%] {\r\n    background-color: #d9534f;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyNzVkODtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmRlbGV0ZS1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NTM0ZjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.css']
            }]
    }], function () { return [{ type: _services_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"] }, { type: _services_fake_data_service__WEBPACK_IMPORTED_MODULE_2__["FakeDataService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, null); })();


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.service */ "qfBg");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./message.service */ "tZre");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");











const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
class AuthService {
    constructor(http, router, userService, messageService, cookieService) {
        this.http = http;
        this.router = router;
        this.userService = userService;
        this.messageService = messageService;
        this.cookieService = cookieService;
        this.baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_BASE_URL}/api`;
        this.cookieValue = '';
    }
    signupUser(userData) {
        const user = userData;
        const url = `${this.baseUrl}/signup`;
        return this.http.post(url, user, httpOptions);
    }
    loginUser(userData) {
        const user = userData;
        const url = `${this.baseUrl}/login`;
        return this.http.post(url, user, httpOptions);
    }
    logoutUser() {
        this.cookieService.delete('username');
        this.cookieService.delete('userId');
        this.cookieService.delete('token');
        this.messageService.sendMessage('user has logged out');
        this.router.navigate(['/login']);
    }
    isloggedIn() {
        return this.cookieService.check('userId');
    }
    getLoggedInUserId() {
        return this.cookieService.get('userId');
    }
    getLoggedInUsername() {
        return this.cookieService.get('username');
    }
    loggedInUserIsAdmin() {
        const loggedInUserId = this.getLoggedInUserId();
        if (!loggedInUserId) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(false);
        }
        return this.userService.getUser(loggedInUserId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => {
            return resp.email === _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ADMIN_USER_EMAIL;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(false)));
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }, { type: _message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"] }]; }, null); })();


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
/* harmony import */ var _shared_shared_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared_functions */ "P4e2");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! marked */ "DlQD");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






class DisplayBlogComponent {
    constructor() { }
    ngOnInit() {
        if (this.blog) {
            this.processBlogData(this.blog);
        }
        this.linkClass = this.parent === 'home-component' ? 'linkEnabled' : 'linkDisabled';
    }
    ngOnChanges() {
        if (this.blog) {
            this.processBlogData(this.blog);
        }
    }
    processBlogData(blog) {
        blog.title = Object(_shared_shared_functions__WEBPACK_IMPORTED_MODULE_1__["reverseHtmlChars"])(blog.title);
        blog.title = blog.title.replace('<script', '');
        blog.body = Object(_shared_shared_functions__WEBPACK_IMPORTED_MODULE_1__["reverseHtmlChars"])(blog.body);
        blog.body = blog.body.replace('<script', '');
        blog.bodyHTML = marked__WEBPACK_IMPORTED_MODULE_2___default()(Object(_shared_shared_functions__WEBPACK_IMPORTED_MODULE_1__["reverseHtmlChars"])(blog.body), { breaks: true, gfm: true, sanitize: false });
        this.blog = blog;
    }
}
DisplayBlogComponent.ɵfac = function DisplayBlogComponent_Factory(t) { return new (t || DisplayBlogComponent)(); };
DisplayBlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DisplayBlogComponent, selectors: [["app-display-blog"]], inputs: { blog: "blog", parent: "parent" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 11, vars: 9, consts: [[1, "blog-card", "fadeInAnimation"], [1, "blog-title"], [3, "ngClass", "routerLink"], [1, "blog-body", 3, "innerHTML"], [1, "author-date"], [1, "user-id-text"]], template: function DisplayBlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.linkClass)("routerLink", "/blogs/" + (ctx.blog == null ? null : ctx.blog._id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.blog == null ? null : ctx.blog.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.blog == null ? null : ctx.blog.bodyHTML, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.blog == null ? null : ctx.blog.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 6, ctx.blog == null ? null : ctx.blog.createdAt, "h:mm a, MMM d y"));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["\r\n.blog-card * {\r\n    background-color: #f4f4f4;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n.blog-card {\r\n    background-color: #f4f4f4;\r\n    width: 100%;\r\n    max-width: 900px;\r\n    border: 0.5px solid #ddd;\r\n    border-radius: 10px;\r\n    margin: 25px auto;\r\n    padding: 30px 25px;\r\n    box-shadow: 0 4px 4px -1px rgba(0,0,0,0.2);\r\n}\r\n\r\n.blog-card h3 {\r\n    padding: 5px 5px 15px 0px;\r\n    margin: 0px 0;\r\n}\r\n\r\n.blog-card .linkEnabled,\r\n.blog-card .linkDisabled {\r\n    color: darkslateblue;   \r\n    text-decoration: none;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 19px;\r\n    font-weight: 700;\r\n    text-transform: capitalize;\r\n    letter-spacing: 0px;\r\n}\r\n\r\n.blog-card .linkDisabled {\r\n    cursor: default;\r\n}\r\n\r\n.blog-card .linkEnabled:hover {\r\n    color: crimson;\r\n    text-decoration: underline;\r\n}\r\n\r\n.blog-card .blog-body h1,\r\n.blog-card .blog-body h2,\r\n.blog-card .blog-body h3,\r\n.blog-card .blog-body h4,\r\n.blog-card .blog-body h5 {\r\n    font-family: 'Roboto', sans-serif;\r\n    font-weight: bold;\r\n}\r\n\r\n.blog-card .blog-body h1 { font-size: 24px; }\r\n\r\n.blog-card .blog-body h2 { font-size: 20px; }\r\n\r\n.blog-card .blog-body h3 { font-size: 16px; }\r\n\r\n.blog-card .blog-body h4 { font-size: 14px; }\r\n\r\n.blog-card .blog-body h5 { font-size: 12px }\r\n\r\n.blog-card .blog-body p {\r\n    background-color: #f4f4f4;\r\n    font-size: 15px;\r\n    font-weight: 500;\r\n    line-height: 1.6;\r\n    padding: 8px 0;\r\n}\r\n\r\n.blog-card .blog-body ul,\r\n.blog-card .blog-body ol {\r\n    margin: 20px;\r\n}\r\n\r\n.blog-card .blog-body code {\r\n    font-family: Consolas, sans-serif;\r\n}\r\n\r\n.blog-card .user-id-text {\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 14px;\r\n    display: inline-block;\r\n    margin-top: 12px;\r\n    padding-right: 15px;\r\n}\r\n\r\n.blog-card .author-date {\r\n    padding: 5px 8px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaXNwbGF5LWJsb2cvZGlzcGxheS1ibG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLGlDQUFpQztJQUNqQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLDBCQUEwQjtBQUM5Qjs7QUFFQTs7Ozs7SUFLSSxpQ0FBaUM7SUFDakMsaUJBQWlCO0FBQ3JCOztBQUVBLDJCQUEyQixlQUFlLEVBQUU7O0FBQzVDLDJCQUEyQixlQUFlLEVBQUU7O0FBQzVDLDJCQUEyQixlQUFlLEVBQUU7O0FBQzVDLDJCQUEyQixlQUFlLEVBQUU7O0FBQzVDLDJCQUEyQixnQkFBZ0I7O0FBRTNDO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rpc3BsYXktYmxvZy9kaXNwbGF5LWJsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYmxvZy1jYXJkICoge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5ibG9nLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA5MDBweDtcclxuICAgIGJvcmRlcjogMC41cHggc29saWQgI2RkZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW46IDI1cHggYXV0bztcclxuICAgIHBhZGRpbmc6IDMwcHggMjVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDRweCAtMXB4IHJnYmEoMCwwLDAsMC4yKTtcclxufVxyXG5cclxuLmJsb2ctY2FyZCBoMyB7XHJcbiAgICBwYWRkaW5nOiA1cHggNXB4IDE1cHggMHB4O1xyXG4gICAgbWFyZ2luOiAwcHggMDtcclxufVxyXG5cclxuLmJsb2ctY2FyZCAubGlua0VuYWJsZWQsXHJcbi5ibG9nLWNhcmQgLmxpbmtEaXNhYmxlZCB7XHJcbiAgICBjb2xvcjogZGFya3NsYXRlYmx1ZTsgICBcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5ibG9nLWNhcmQgLmxpbmtEaXNhYmxlZCB7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbi5ibG9nLWNhcmQgLmxpbmtFbmFibGVkOmhvdmVyIHtcclxuICAgIGNvbG9yOiBjcmltc29uO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5ibG9nLWNhcmQgLmJsb2ctYm9keSBoMSxcclxuLmJsb2ctY2FyZCAuYmxvZy1ib2R5IGgyLFxyXG4uYmxvZy1jYXJkIC5ibG9nLWJvZHkgaDMsXHJcbi5ibG9nLWNhcmQgLmJsb2ctYm9keSBoNCxcclxuLmJsb2ctY2FyZCAuYmxvZy1ib2R5IGg1IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYmxvZy1jYXJkIC5ibG9nLWJvZHkgaDEgeyBmb250LXNpemU6IDI0cHg7IH1cclxuLmJsb2ctY2FyZCAuYmxvZy1ib2R5IGgyIHsgZm9udC1zaXplOiAyMHB4OyB9XHJcbi5ibG9nLWNhcmQgLmJsb2ctYm9keSBoMyB7IGZvbnQtc2l6ZTogMTZweDsgfVxyXG4uYmxvZy1jYXJkIC5ibG9nLWJvZHkgaDQgeyBmb250LXNpemU6IDE0cHg7IH1cclxuLmJsb2ctY2FyZCAuYmxvZy1ib2R5IGg1IHsgZm9udC1zaXplOiAxMnB4IH1cclxuXHJcbi5ibG9nLWNhcmQgLmJsb2ctYm9keSBwIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgIHBhZGRpbmc6IDhweCAwO1xyXG59XHJcblxyXG4uYmxvZy1jYXJkIC5ibG9nLWJvZHkgdWwsXHJcbi5ibG9nLWNhcmQgLmJsb2ctYm9keSBvbCB7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbi5ibG9nLWNhcmQgLmJsb2ctYm9keSBjb2RlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBDb25zb2xhcywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmJsb2ctY2FyZCAudXNlci1pZC10ZXh0IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uYmxvZy1jYXJkIC5hdXRob3ItZGF0ZSB7XHJcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DisplayBlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-display-blog',
                templateUrl: './display-blog.component.html',
                styleUrls: ['./display-blog.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { blog: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], parent: [{
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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class UserService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_BASE_URL}/api`;
        this.users = [];
    }
    getUser(id) {
        const url = `${this.baseUrl}/users/${id}`;
        return this.http.get(url);
    }
    getUsernames() {
        const url = `${this.baseUrl}/usernames`;
        return this.http.get(url);
    }
    getUsername(id) {
        const url = `${this.baseUrl}/usernames/${id}`;
        return this.http.get(url);
    }
    updateUsername(userId, username) {
        const url = `${this.baseUrl}/usernames/${userId}`;
        return this.http.patch(url, { username });
    }
    setUsers(users) {
        this.users = users;
    }
    deleteAllUsers() {
        const url = `${this.baseUrl}/users`;
        return this.http.delete(url);
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

/***/ "tZre":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class MessageService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    sendMessage(message) {
        this.subject.next({ text: message });
    }
    getMessage() {
        return this.subject.asObservable();
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(); };
MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "vPOg":
/*!*******************************************************!*\
  !*** ./src/app/components/loader/loader.component.ts ***!
  \*******************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0) { return { "loader-container": a0 }; };
const _c1 = function (a0, a1) { return { "loader": a0, "hidden": a1 }; };
class LoaderComponent {
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], inputs: { showLoader: "showLoader" }, decls: 2, vars: 7, consts: [[3, "ngClass"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.showLoader));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c1, ctx.showLoader, !ctx.showLoader));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".loader-container[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 100px;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 200px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    animation: fadeIn 2s ease-in;\r\n}\r\n\r\n.hidden[_ngcontent-%COMP%] {\r\n    display: none;\r\n    height: 0;\r\n}\r\n\r\n.loader[_ngcontent-%COMP%] {\r\n    border: 10px solid #f3f3f3; \r\n    border-top: 10px solid rgb(58, 225, 255);\r\n    border-radius: 50%;\r\n    width: 80px;\r\n    height: 80px;\r\n    animation-name: spin;\r\n    animation-duration: 1s;\r\n    animation-timing-function: linear; \r\n    animation-iteration-count: infinite;\r\n}\r\n\r\n@keyframes spin {\r\n    0% { transform: rotate(0deg); }\r\n    100% { transform: rotate(360deg); }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixPQUFPO0lBQ1AsV0FBVztJQUNYLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQix3Q0FBd0M7SUFDeEMsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixpQ0FBaUM7SUFDakMsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksS0FBSyx1QkFBdUIsRUFBRTtJQUM5QixPQUFPLHlCQUF5QixFQUFFO0FBQ3RDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmxvYWRlci1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMDBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFuaW1hdGlvbjogZmFkZUluIDJzIGVhc2UtaW47XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGhlaWdodDogMDtcclxufVxyXG5cclxuLmxvYWRlciB7XHJcbiAgICBib3JkZXI6IDEwcHggc29saWQgI2YzZjNmMzsgXHJcbiAgICBib3JkZXItdG9wOiAxMHB4IHNvbGlkIHJnYig1OCwgMjI1LCAyNTUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBhbmltYXRpb24tbmFtZTogc3BpbjtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7IFxyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbn1cclxuICBcclxuQGtleWZyYW1lcyBzcGluIHtcclxuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loader',
                templateUrl: './loader.component.html',
                styleUrls: ['./loader.component.css']
            }]
    }], null, { showLoader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/admin/admin.component */ "cCTE");
/* harmony import */ var _components_blog_item_blog_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/blog-item/blog-item.component */ "+3/u");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "JzmT");
/* harmony import */ var _components_signup_login_form_signup_login_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/signup-login-form/signup-login-form.component */ "Ow/l");
/* harmony import */ var _components_edit_blog_form_edit_blog_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/edit-blog-form/edit-blog-form.component */ "c1X2");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "Lquv");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards/auth.guard */ "UTcu");
/* harmony import */ var _guards_edit_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guards/edit.guard */ "Lns2");
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guards/admin.guard */ "Tk1w");














const routes = [
    { path: '', redirectTo: 'blogs', pathMatch: 'full' },
    { path: 'blogs', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'blogs/:_id', component: _components_blog_item_blog_item_component__WEBPACK_IMPORTED_MODULE_3__["BlogItemComponent"] },
    { path: 'add', component: _components_edit_blog_form_edit_blog_form_component__WEBPACK_IMPORTED_MODULE_7__["EditBlogFormComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'edit/:_id', component: _components_edit_blog_form_edit_blog_form_component__WEBPACK_IMPORTED_MODULE_7__["EditBlogFormComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"], _guards_edit_guard__WEBPACK_IMPORTED_MODULE_10__["EditGuard"]] },
    { path: 'admin', component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"], _guards_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]] },
    { path: 'signup', component: _components_signup_login_form_signup_login_form_component__WEBPACK_IMPORTED_MODULE_6__["SignupLoginFormComponent"] },
    { path: 'login', component: _components_signup_login_form_signup_login_form_component__WEBPACK_IMPORTED_MODULE_6__["SignupLoginFormComponent"] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: '404', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] },
    { path: '**', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] }
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