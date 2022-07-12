import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {BlogService} from "../../services/blog.service";
import {ActivatedRoute} from "@angular/router";
import {IPost} from "../../dto/IPost";
import {Subscription, tap} from "rxjs";
import {IMedia} from "../../dto/IMedia";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
  @Input() posts: IPost[] = [];
  images = new Map<number, IMedia>()
  searchInput = "";
  searTagIds: number[] = [];
  searchInputSubscription!: Subscription;
  isImageLoading = false;

  constructor(
    private blogService: BlogService, private readonly activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.getQueryParameter();
    this.loadImages(this.posts);
  }


  private getQueryParameter() {
    this.searchInputSubscription = this.activatedRoute.queryParamMap.subscribe(params => {
      this.searchInput = params.get("search") ?? "";
      this.searTagIds = (params.get("tags") ?? "").split(';')
        .filter(str => str)
        .map(str => parseInt(str));
    })
  }

  private loadImages(posts: IPost[]) {
    posts
      // todo on call
      .filter(p => p.featured_media !== 0)
      .filter(p => !this.images.has(p.featured_media))
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
