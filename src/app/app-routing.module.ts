import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostDetailComponent} from "./posts/detail/post-detail.component";
import {AboutUsComponent} from "./pages/about-us/about-us.component";
import {HomeComponent} from "./pages/home/home.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {BlogComponent} from "./pages/blog/blog.component";

const routes: Routes = [
  {path: 'posts', component: BlogComponent},
  {path: 'posts/:id', component: PostDetailComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
