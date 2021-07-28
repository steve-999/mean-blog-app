import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AuthService } from './services/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminComponent } from './components/admin/admin.component';
import { DisplayBlogComponent } from './components/display-blog/display-blog.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EditBlogFormComponent } from './components/edit-blog-form/edit-blog-form.component';
import { SignupLoginFormComponent } from './components/signup-login-form/signup-login-form.component';
import { AuthGuard } from './guards/auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminGuard } from './guards/admin.guard';
import { LoaderComponent } from './components/loader/loader.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogItemComponent,
    HeaderComponent,
    AdminComponent,
    DisplayBlogComponent,
    PageNotFoundComponent,
    EditBlogFormComponent,
    SignupLoginFormComponent,
    DashboardComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({})
  ],
  providers: [CookieService, AuthService, AuthGuard, AdminGuard, { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
