import {Component, OnInit} from '@angular/core';
import {ITag} from "../../dto/posts/ITag";
import {BlogService} from "../../services/wordpress/blog.service";
import {Observable, Subscription} from "rxjs";
import {IPost} from "../../dto/posts/IPost";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  tags$!: Observable<ITag[]>;
  posts$!: Observable<IPost[]>;
  queryParamsSubscription!: Subscription;
  searchInput = "";
  title = "BEITRÄGE";
  selectedTagIds: number[] = [];

  constructor(private readonly blogService: BlogService,
              private readonly activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.getQueryParameter();
    this.tags$ = this.blogService.getTags();
    this.posts$ = this.blogService.getPosts();
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription?.unsubscribe();
  }

  onSelectedTagsChanged(tags: ITag[]) {
    this.selectedTagIds = tags?.map(t => t.id) ?? [];
  }

  onSearchChanged(search: string) {
    this.searchInput = search;
  }

  private getQueryParameter() {
    this.queryParamsSubscription = this.activatedRoute.queryParamMap
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
