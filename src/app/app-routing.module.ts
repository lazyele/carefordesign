import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostListComponent} from "./posts/post-list/post-list.component";
import {PostDetailComponent} from "./posts/detail/post-detail.component";
import {AboutUsComponent} from "./pages/about-us/about-us.component";
import {HomeComponent} from "./pages/home/home.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {AccessibilityComponent} from "./pages/accessibility/accessibility.component";
import {ImpressumComponent} from "./pages/impressum/impressum.component";
import {PrivacyPolicyComponent} from "./pages/privacy-policy/privacy-policy.component";
import {SourcesComponent} from "./pages/sources/sources.component";

const routes: Routes = [
  {path: 'posts', component: PostListComponent},
  {path: 'posts/:id', component: PostDetailComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'accessibility', component: AccessibilityComponent},
  {path: 'impressum', component: ImpressumComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
  {path: 'sources', component: SourcesComponent},
  {path: '**', component: PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
