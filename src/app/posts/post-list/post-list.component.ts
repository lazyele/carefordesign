import {Component, OnDestroy, OnInit} from '@angular/core';
import {BlogService} from "../../services/blog.service";
import {ActivatedRoute} from "@angular/router";
import {IPost} from "../../dto/IPost";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
  blogPosts: IPost[] = [];
  searchInput = "";
  searchInputSubscription!: Subscription;

  constructor(
    private blogService: BlogService, private readonly activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {

    this.searchInputSubscription = this.activatedRoute.queryParamMap.subscribe(params => {
      this.searchInput = params.get("search") ?? "";
    })
    this.getPosts()
  }

  getPosts() {
    this.blogService.getPosts()
      .subscribe(
        {
          next: data => this.blogPosts = data,
          error: error => console.log(error)
        });
  }

  ngOnDestroy(): void {
    this.searchInputSubscription.unsubscribe();
  }
}
