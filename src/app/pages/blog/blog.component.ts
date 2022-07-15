import {Component, OnInit} from '@angular/core';
import {ITag} from "../../dto/ITag";
import {BlogService} from "../../services/blog.service";
import {filter, map, Observable, Subscription} from "rxjs";
import {IPost} from "../../dto/IPost";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {TagFilterPipe} from "../../filters/tag-filter.pipe";
import {ContentFilterPipe} from "../../filters/content-filter.pipe";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  tags$!: Observable<ITag[]>;
  posts$!: Observable<IPost[]>;
  searchInputSubscription!: Subscription;
  searchInput = "";
  selectedTagIds: number[] = [];

  constructor(private readonly blogService: BlogService,
              private readonly activatedRoute: ActivatedRoute,
              private readonly tagFilterPipe: TagFilterPipe,
              private readonly contentFilterPipe: ContentFilterPipe
  ) {


  }

  ngOnInit(): void {
    this.getQueryParameter();
    this.tags$ = this.blogService.getTags();
    this.posts$ = this.blogService.getPosts()
      .pipe(
        filter(posts => posts?.length > 0),
        map(posts => this.tagFilterPipe.transform(posts ?? [], this.selectedTagIds)),
        map(posts => this.contentFilterPipe.transform(posts, this.searchInput))
      );
  }

  ngOnDestroy(): void {
    this.searchInputSubscription.unsubscribe();
  }

  onSelectedTagsChanged(tags: ITag[]) {
    this.selectedTagIds = tags?.map(t => t.id) ?? [];
  }

  private getQueryParameter() {
    this.searchInputSubscription = this.activatedRoute.queryParamMap
      .subscribe(params => {
        this.parseSearchQuery(params);
        this.parseTagQuery(params);
      })
  }

  private parseSearchQuery(params: ParamMap) {
    const searchParam = params.get("search");
    if (searchParam) {
      this.searchInput = searchParam;
    }
  }

  private parseTagQuery(params: ParamMap) {
    const tagParam = params.get("tags")
    if (tagParam) {
      this.selectedTagIds = tagParam
        .split(';')
        .filter(str => str)
        .map(str => parseInt(str));
    }
  }
}
