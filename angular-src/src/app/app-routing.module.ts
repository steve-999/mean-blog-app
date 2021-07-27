import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SignupLoginFormComponent } from './components/signup-login-form/signup-login-form.component';
import { EditBlogFormComponent } from './components/edit-blog-form/edit-blog-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { EditGuard } from './guards/edit.guard';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  {path: '', redirectTo: 'blogs', pathMatch: 'full'},
  {path: 'blogs', component: HomeComponent},
  {path: 'blogs/:_id', component: BlogItemComponent},
  {path: 'add', component: EditBlogFormComponent, canActivate: [AuthGuard]}, 
  {path: 'edit/:_id', component: EditBlogFormComponent, canActivate: [AuthGuard, EditGuard]},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard, AdminGuard]},   
  {path: 'signup', component: SignupLoginFormComponent},
  {path: 'login', component: SignupLoginFormComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
