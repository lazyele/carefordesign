import {Component, OnDestroy, OnInit} from '@angular/core';
import {BlogService} from "../../services/blog.service";
import {ActivatedRoute} from "@angular/router";
import {IPost} from "../../dto/IPost";
import {forkJoin, Subscription, tap} from "rxjs";
import {IMedia} from "../../dto/IMedia";
import {ITag} from "../../dto/ITag";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
  blogPosts: IPost[] = [];
  tags: ITag[] = [];
  images = new Map<number, IMedia>()
  searchInput = "";
  searchInputSubscription!: Subscription;
  isImageLoading = false;

  constructor(
    private blogService: BlogService, private readonly activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {

    this.searchInputSubscription = this.activatedRoute.queryParamMap.subscribe(params => {
      this.searchInput = params.get("search") ?? "";
    })
    this.loadData()
  }

  loadData() {

    forkJoin(this.blogService.getPosts(), this.blogService.getTags())
      .subscribe(
        {
          next: (data: [IPost[], ITag[]]) => {
            this.blogPosts = data[0];
            this.tags = data[1];
            this.isImageLoading = true;
            this.loadImages(this.blogPosts);
            this.isImageLoading = false;
          },
          error: error => console.log(error)
        });

  }

  private loadImages(posts: IPost[]) {
    posts.filter(p => !this.images.has(p.featured_media))
      .forEach(p => this.blogService.getImage(p.featured_media)
        .subscribe(p => {
          if (this.images.has(p.id)) {
            return;
          }
          this.images.set(p.id, p);
        })
      );
  }

  getImage(id: number) {
    return this.blogService.getImage(id).pipe(tap(i => console.log(i)))
  }

  ngOnDestroy(): void {
    this.searchInputSubscription.unsubscribe();
  }
}
