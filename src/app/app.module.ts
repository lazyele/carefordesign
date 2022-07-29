import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PostListComponent} from './posts/post-list/post-list.component';
import {PostDetailComponent} from './posts/detail/post-detail.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ThemeSwitcherComponent} from './theme-switcher/theme-switcher.component';
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";
import {HeaderComponent} from './layout/header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatRadioModule} from "@angular/material/radio";
import {MatMenuModule} from "@angular/material/menu";
import {HomeComponent} from './pages/home/home.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {RouterModule} from "@angular/router";
import {FooterComponent} from './layout/footer/footer.component';
import {ContentFilterPipe} from './posts/pipes/filters/content-filter.pipe';
import {SearchBarComponent} from './posts/search-bar/search-bar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatListModule} from "@angular/material/list";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatChipsModule} from "@angular/material/chips";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {TagFilterPipe} from './posts/pipes/filters/tag-filter.pipe';
import {TagSelectionComponent} from './posts/tag-selection/tag-selection.component';
import {BlogComponent} from './pages/blog/blog.component';
import {SpinnerComponent} from './layout/spinner/spinner.component';
import {
  IllustrationAboutUsComponent
} from "./layout/illustrations/illustation-about-us/illustration-about-us.component";
import {PostCounterComponent} from './posts/post-counter/post-counter.component';
import {IllustrationProjectComponent} from './layout/illustrations/illustration-project/illustration-project.component';
import {
  IllustrationLiteraturComponent
} from './layout/illustrations/illustration-literatur/illustration-literatur.component';
import {IllustrationErrorComponent} from './layout/illustrations/illustration-error/illustration-error.component';
import {ImpressumComponent} from './pages/impressum/impressum.component';
import {PrivacyPolicyComponent} from './pages/privacy-policy/privacy-policy.component';
import {SourcesComponent} from './pages/sources/sources.component';
import {AccessibilityComponent} from './pages/accessibility/accessibility.component';
import {AuthorReducerPipe} from './posts/pipes/reducer/author-reducer.pipe';
import {TagReducerPipe} from './posts/pipes/reducer/tag-reducer.pipe';
import {AuthorNamePipe} from './posts/pipes/author-name.pipe';
import {HeadlinerComponent} from './layout/headliner/headliner.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostDetailComponent,
    ThemeSwitcherComponent,
    HeaderComponent,
    HomeComponent,
    AboutUsComponent,
    PageNotFoundComponent,
    FooterComponent,
    ContentFilterPipe,
    SearchBarComponent,
    IllustrationAboutUsComponent,
    PostCounterComponent,
    IllustrationProjectComponent,
    IllustrationLiteraturComponent,
    IllustrationErrorComponent,
    ImpressumComponent,
    PrivacyPolicyComponent,
    SourcesComponent,
    AccessibilityComponent,
    TagFilterPipe,
    TagSelectionComponent,
    BlogComponent,
    SpinnerComponent,
    PostCounterComponent,
    AuthorReducerPipe,
    TagReducerPipe,
    AuthorNamePipe,
    HeadlinerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatRadioModule,
    MatMenuModule,
    RouterModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatListModule,
    MatInputModule,
    MatCardModule,
    MatChipsModule,
    MatProgressSpinnerModule

  ],
  providers: [HttpClient, ContentFilterPipe, TagFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
