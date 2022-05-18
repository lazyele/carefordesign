import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostListComponent} from "./posts/post-list/post-list.component";
import {PostDetailComponent} from "./posts/detail/post-detail.component";

const routes: Routes = [
  {path: 'post', component: PostListComponent},
  {path: 'post/:id', component: PostDetailComponent},
  {path: '**', redirectTo: 'post', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
