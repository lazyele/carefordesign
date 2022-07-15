import {Component, OnInit} from '@angular/core';
import {IPost} from "../../dto/IPost";
import {BlogService} from "../../services/blog.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts$!: Observable<IPost[]>;
  searchInput = ''

  constructor(
    private readonly blogService: BlogService,
    private readonly router: Router
  ) {
  }

  ngOnInit() {
    this.posts$ = this.blogService.getPosts();
  }

  onSearchChanged(search: string) {
    this.searchInput = search;
  }

  onNavigateToList() {
    this.router.navigate(["posts"], {queryParams: {search: this.searchInput}});
  }

}
