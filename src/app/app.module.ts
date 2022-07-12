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
import {HeaderComponent} from './header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatRadioModule} from "@angular/material/radio";
import {MatMenuModule} from "@angular/material/menu";
import {HomeComponent} from './pages/home/home.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {RouterModule} from "@angular/router";
import {FooterComponent} from './footer/footer.component';
import {ContentFilterPipe} from './filters/content-filter.pipe';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatListModule} from "@angular/material/list";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatChipsModule} from "@angular/material/chips";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {TagFilterPipe} from './filters/tag-filter.pipe';
import {TagSelectionComponent} from './tag-selection/tag-selection.component';
import {BlogComponent} from './pages/blog/blog.component';

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
    TagFilterPipe,
    TagSelectionComponent,
    BlogComponent,
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
  providers: [HttpClient, ContentFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
