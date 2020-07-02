import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { PostsComponent } from './home/posts/posts.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { UsersComponent } from './home/users/users.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent,
  children:[
    {path:'',component:DashboardComponent},
    {path:'posts',component:PostsComponent},
    {path:'category',component:CategoriesComponent},
    {path:'users',component:UsersComponent}
  
  ]},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
