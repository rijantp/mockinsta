import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewPostsComponent } from './view-posts/view-posts.component';

const routes: Routes = [
  {path:'',pathMatch:"full",redirectTo:'home'},
  {path:'home',component:HomeComponent},
  {path:'posts',component:ViewPostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
